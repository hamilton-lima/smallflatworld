import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RendererService } from './renderer.service';
import { MeshService } from './mesh.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('game') canvas: ElementRef<HTMLCanvasElement>;
  constructor(private service: RendererService, private mesh: MeshService) {}

  ngAfterViewInit() {
    this.init();
  }

  init(): void {
    const engineState = this.service.setup(this.canvas);
    this.mesh.addbox(engineState.scene);

    engineState.engine.runRenderLoop(() => {
      engineState.scene.render();
    });
  }
}
