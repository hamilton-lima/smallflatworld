import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MovementService } from './movement.service';
import { CameraService } from './camera.service';
import { EditorService } from '../editor/editor.service';
import { ScenarioService } from './scenario.service';
import { InputService } from '../shared/input.service';
import { ClientService } from '../multiplayer/client.service';
import { EngineState, SceneElement } from './renderer.model';
import { KeyboardService } from './keyboard.service';
import { LocalClipboardService} from './local-clipboard.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('game') canvas: ElementRef<HTMLCanvasElement>;
  private currentEngineState: EngineState;

  constructor(
    private service: RendererService,
    private movement: MovementService,
    private camera: CameraService,
    private editor: EditorService,
    private scenario: ScenarioService,
    private input: InputService,
    private client: ClientService,
    private keyboard: KeyboardService,
    private clipboard: LocalClipboardService
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.input.setTarget(this.canvas);
    this.input.focus();

    this.service.reload.subscribe((_) => this.init());
  }

  init(): void {
    if( this.currentEngineState){
      this.currentEngineState.scene.dispose();
      this.currentEngineState.engine.dispose();
    }

    const engineState = this.service.setup(this.canvas);
    this.currentEngineState = engineState;
    engineState.engine.displayLoadingUI();

    this.editor.setup(engineState.scene);
    this.scenario.setup(engineState.scene);

    window.addEventListener('resize', () => {
      engineState.engine.resize();
    });

    const sequence = [];
    sequence.push(this.scenario.buildRealm(engineState));

    Promise.all(sequence).then(
      () => {
        console.log('engineState after loading', engineState);

        engineState.camera = this.camera.setup(
          engineState.scene,
          engineState.character
        );

        engineState.engine.runRenderLoop(() => {
          this.movement.move(engineState.scene, engineState.character);
          this.clipboard.render();
          engineState.scene.render();
        });

        engineState.engine.hideLoadingUI();

        // subscribe to updates from multiplayer client
        this.client.onUpdate.subscribe((elements: SceneElement[]) => {
          this.service.update(engineState, elements);
        });

        this.client.onDelete.subscribe((name: string) => {
          this.service.delete(engineState, name);
        });
      },
      (error) => {
        console.error('Error when building scenario', error);
      }
    );
  }

  keydown(event: KeyboardEvent): void {
    this.keyboard.down(event);
  }

  keyup(event: KeyboardEvent): void {
    this.keyboard.up(event);
  }
}
