import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MeshService } from './mesh.service';
import { MovementService } from './movement.service';
import { Subject } from 'rxjs';

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
    private movement: MovementService
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.canvas.nativeElement.focus();
  }

  init(): void {
    const engineState = this.service.setup(this.canvas);
    engineState.character = this.mesh.addbox(engineState.scene);

    window.addEventListener('resize', () => {
      engineState.engine.resize();
    });

    engineState.engine.runRenderLoop(() => {
      this.movement.move(engineState.character);
      engineState.scene.render();
    });
  }

  keydown(event: KeyboardEvent): void {
    this.movement.down(event);
  }

  keyup(event: KeyboardEvent): void {
    this.movement.up(event);
  }
}
