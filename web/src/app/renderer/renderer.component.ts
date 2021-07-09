import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RendererService } from './renderer.service';
import { MeshService } from './mesh.service';
import { KeyboardService } from './keyboard.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements AfterViewInit {
  @ViewChild('game') canvas: ElementRef<HTMLCanvasElement>;
  keyboard: Subject<KeyboardEvent> = new Subject();

  constructor(
    private service: RendererService,
    private mesh: MeshService,
    private keyboardService: KeyboardService
  ) {}

  ngAfterViewInit() {
    this.init();
    this.canvas.nativeElement.focus();
  }

  init(): void {
    const engineState = this.service.setup(this.canvas);
    this.mesh.addbox(engineState.scene);

    window.addEventListener('resize', () => {
      engineState.engine.resize();
    });

    this.keyboardService.setup(engineState, this.keyboard);

    engineState.engine.runRenderLoop(() => {
      engineState.scene.render();
    });
  }

  keydown(event) {
    this.keyboard.next(event);
  }
}
