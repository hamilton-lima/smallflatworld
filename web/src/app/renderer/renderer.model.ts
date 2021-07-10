import { Engine, FreeCamera, Scene, HemisphericLight, Mesh } from '@babylonjs/core';

export class EngineState {
  engine: Engine;
  scene: Scene;
  camera: FreeCamera;
  mainLight: HemisphericLight;
  character: Mesh;
}
