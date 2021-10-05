import { ElementRef, Injectable } from '@angular/core';
import {
  Engine,
  Scene,
  Color4,
  Vector3,
  HemisphericLight,
  DirectionalLight,
  Color3,
} from '@babylonjs/core';
import { Subject } from 'rxjs';
import { EditorService } from '../editor/editor.service';
import { EngineState, SceneElement } from './renderer.model';

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

    result.scene.useRightHandedSystem = true;
    result.scene.clearColor = new Color4(0, 0, 0, 0);
    result.scene.collisionsEnabled = true;
    this.addGravityToScene(result.scene);

    const ambient = new HemisphericLight(
      'ambient',
      new Vector3(0, 1, 0),
      result.scene
    );
    ambient.diffuse = new Color3(1, 1, 1);
    ambient.specular = new Color3(0.4, 0.4, 0.4);
    ambient.groundColor = new Color3(1, 1, 1);
    ambient.intensity = 0.9;

    const light = new DirectionalLight(
      'light',
      new Vector3(0, -1, 0),
      result.scene
    );
    this.setLightPositionByAngle(light, 120, 50, 100);
    light.autoUpdateExtends = true;
    light.diffuse = new Color3(1, 1, 1);
    light.intensity = 1;

    return result;
  }

  addGravityToScene(scene: Scene) {
    const assumedFramesPerSecond = 60;
    const earthGravity = -9.81;
    scene.gravity = new Vector3(0, earthGravity / assumedFramesPerSecond, 0);
  }

  // from https://github.com/nimadez/voxel-builder/blob/353ce8b56f1c57aaa6e132a6907f62d175936809/index.html#L1517
  setLightPositionByAngle(light, angle, distance, height) {
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = height;
    const z = Math.sin((angle * Math.PI) / 180) * distance;
    const pos = new Vector3(x, y, z);
    light.position = pos; // our primary shadow light
    light.setDirectionToTarget(Vector3.Zero());
  }

  update(state: EngineState, elements: SceneElement[]) {
    elements.forEach((element: SceneElement) => {
      const found = state.scene.getMeshByName(element.name);
      console.log('update event', element.name, 'found == null', found == null);

      if (found) {
        this.editor.update(state.scene, element);
      } else {
        // TODO: handle promises
        this.editor.add(state.scene, element);
      }
    });
  }

  delete(state: EngineState, name: string) {
    const found = state.scene.getMeshByName(name);
    console.log('delete event', name, 'found == null', found == null);

    if (found) {
      this.editor.delete(found);
    }
  }
}
