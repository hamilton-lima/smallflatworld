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
} from '@babylonjs/core';

class EngineState {
  engine: Engine;
  scene: Scene;
  camera: FreeCamera;
  mainLight: HemisphericLight;
}

@Injectable({
  providedIn: 'root',
})
export class RendererService {
  setup(canvas: ElementRef<HTMLCanvasElement>): EngineState {
    let result = new EngineState();
    result.engine = new Engine(canvas.nativeElement, true);
    result.scene = new Scene(result.engine);
    result.scene.clearColor = new Color4(0, 0, 0, 0);
    
    result.camera = new FreeCamera(
      'camera1',
      new Vector3(5, 10, -20),
      result.scene
    );

    result.camera.setTarget(Vector3.Zero());
    result.camera.attachControl(canvas, false);
    result.mainLight = new HemisphericLight(
      'light1',
      new Vector3(0, 1, 0),
      result.scene
    );

    return result;
  }

  constructor() {}
}
