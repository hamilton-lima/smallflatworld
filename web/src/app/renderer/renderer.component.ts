import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MeshService } from './mesh.service';
import { MovementService } from './movement.service';
import { CameraService } from './camera.service';
import { EditorService } from './editor.service';
import { ScenarioService } from './scenario.service';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { InputService } from '../input.service';
import { MeshLoaderService } from '../mesh/mesh-loader.service';
import { CharacterService} from '../mesh/character.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('game') canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private service: RendererService,
    private mesh: MeshService,
    private movement: MovementService,
    private camera: CameraService,
    private editor: EditorService,
    private scenario: ScenarioService,
    private logger: NgxFancyLoggerService,
    private input: InputService,
    private loader: MeshLoaderService,
    private character: CharacterService,
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

    this.scenario.buildRealm(engineState).then(
      () => {
        console.log('engineState after loading', engineState);
        engineState.camera = this.camera.setup(
          engineState.scene,
          engineState.character
        );

        this.character.load(engineState);

        engineState.engine.runRenderLoop(() => {
          this.movement.move(engineState.character);
          engineState.scene.render();
        });
        
        engineState.engine.hideLoadingUI();
      },
      (error) => {
        this.logger.error('Error when building scenario', error);
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
