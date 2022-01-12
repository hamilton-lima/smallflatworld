import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
import { Vector2 } from '@babylonjs/core';
import { SceneElementMemento } from 'src/app/realm/realm.model';
import { buildVector3 } from '../renderer/builders';

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

        engineState.camera = this.camera.setup(engineState);

        engineState.engine.runRenderLoop(() => {
          this.movement.move(engineState);
          this.clipboard.render();
          engineState.scene.render();
        });

        engineState.engine.hideLoadingUI();

        // subscribe to updates from multiplayer client
        this.client.elements.from().onChange().subscribe((element: SceneElementMemento) => {
          const converted = this.memento2Vector3(element);
          this.service.update(engineState, [converted]);
        });

        this.client.elements.from().onRemove().subscribe((element: SceneElementMemento) => {
          this.service.delete(engineState, element.name);
        });

      },
      (error) => {
        console.error('Error when building scenario', error);
      }
    );
  }

  keydown(event: KeyboardEvent): void {
    this.keyboard.down(event);
    event.preventDefault();
  }

  keyup(event: KeyboardEvent): void {
    this.keyboard.up(event);
    event.preventDefault();
  }

  isDraggingOver: boolean = false;

  @HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;

    console.log('on drop', event);
    const point = new Vector2(event.x, event.y);
    this.editor.onDropFromLibrary.next(point);
    this.input.focus();
  }

  memento2Vector3(element: SceneElementMemento): SceneElement {
    const result = <SceneElement>{
      name: element.name,
      position: buildVector3(element.position),
      rotation: buildVector3(element.rotation),
      scaling: buildVector3(element.scaling),
      code: element.code,
      imageName: element.imageName,
      skipColision: element.skipColision,
    };
    return result;
  }
}

