import { ElementRef, Injectable } from '@angular/core';
import {
  Engine,
  FreeCamera,
  Scene,
  Light,
  Mesh,
  Color3,
  Color4,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  Texture,
  DynamicTexture,
  Space,
  Camera,
  AbstractMesh,
} from '@babylonjs/core';
import { Subject } from 'rxjs';
import { SceneElement } from '../persistence/persistence.model';
import { EditorService } from './editor.service';
import { EngineState } from './renderer.model';

@Injectable({
  providedIn: 'root',
})
export class RendererService {
  reload: Subject<void> = new Subject();

  constructor(private editor: EditorService) {}

  setup(canvas: ElementRef<HTMLCanvasElement>): EngineState {
    const result = new EngineState();
    result.engine = new Engine(canvas.nativeElement, true);
    result.scene = new Scene(result.engine);
    result.scene.clearColor = new Color4(0, 0, 0, 0);

    result.mainLight = new HemisphericLight(
      'light1',
      new Vector3(0, 1, 0),
      result.scene
    );

    return result;
  }

  update(state: EngineState, elements: SceneElement[]) {
    elements.forEach((element: SceneElement) => {
      const found = state.scene.getMeshByName(element.name);
      console.log('update event', element.name, 'found == null', found == null);

      if (found) {
        this.editor.update(state.scene, element);
      } else {
        this.editor.add(state.scene, element);
      }
    });
  }
}
