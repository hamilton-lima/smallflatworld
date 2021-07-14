import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MeshService } from './mesh.service';
import { MovementService } from './movement.service';
import { CameraService } from './camera.service';
import { EditorService } from './editor.service';
import { ScenarioService } from './scenario.service';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';

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
    private logger: NgxFancyLoggerService
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.canvas.nativeElement.focus();
  }

  init(): void {
    const engineState = this.service.setup(this.canvas);
    engineState.engine.displayLoadingUI();

    engineState.character = this.mesh.addbox(engineState.scene);
    console.log('character', engineState.character);
    this.editor.setup(engineState.scene);
    this.scenario.setup(engineState.scene);

    engineState.camera = this.camera.setup(
      engineState.scene,
      engineState.character
    );

    window.addEventListener('resize', () => {
      engineState.engine.resize();
    });

    this.scenario.buildRealm(engineState).then(
      () => {
        console.log('engineState after loading', engineState);
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
