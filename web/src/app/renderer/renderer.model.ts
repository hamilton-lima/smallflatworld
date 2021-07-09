import { Engine, FreeCamera, Scene, HemisphericLight } from '@babylonjs/core';

export class EngineState {
  engine: Engine;
  scene: Scene;
  camera: FreeCamera;
  mainLight: HemisphericLight;
}
