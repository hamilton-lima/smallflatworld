import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MovementService } from './movement.service';
import { CameraService } from './camera.service';
import { EditorService } from '../editor/editor.service';
import { ScenarioService } from './scenario.service';
import { InputService } from '../input.service';
import { CharacterService } from '../mesh/character.service';
import { ClientService } from '../multiplayer/client.service';
import { SceneElement } from './renderer.model';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('game') canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private service: RendererService,
    private movement: MovementService,
    private camera: CameraService,
    private editor: EditorService,
    private scenario: ScenarioService,
    private input: InputService,
    private character: CharacterService,
    private client: ClientService
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.input.setTarget(this.canvas);
    this.input.focus();

    this.service.reload.subscribe((_) => this.init());
  }

  init(): void {
    const engineState = this.service.setup(this.canvas);
    engineState.engine.displayLoadingUI();

    this.editor.setup(engineState.scene);
    this.scenario.setup(engineState.scene);

    window.addEventListener('resize', () => {
      engineState.engine.resize();
    });

    const sequence = [];
    sequence.push(this.character.load(engineState));
    sequence.push(this.scenario.buildRealm(engineState));

    Promise.all(sequence).then(
      () => {
        console.log('engineState after loading', engineState);

        engineState.camera = this.camera.setup(
          engineState.scene,
          engineState.character
        );

        engineState.engine.runRenderLoop(() => {
          this.movement.move(engineState.character);
          engineState.scene.render();
        });

        engineState.engine.hideLoadingUI();

        // subscribe to updates from multiplayer client
        this.client.onUpdate.subscribe((elements: SceneElement[]) => {
          this.service.update(engineState, elements);
        });
        
        this.client.onDelete.subscribe((name:string) => {
          this.service.delete(engineState, name);
        });
      },
      (error) => {
        console.error('Error when building scenario', error);
      }
    );
  }

  keydown(event: KeyboardEvent): void {
    this.movement.down(event);
  }

  keyup(event: KeyboardEvent): void {
    this.movement.up(event);
  }
}
