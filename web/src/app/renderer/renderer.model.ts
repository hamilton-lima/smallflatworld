import { Engine, Camera, Scene, HemisphericLight, Mesh } from '@babylonjs/core';

export class EngineState {
  engine: Engine;
  scene: Scene;
  camera: Camera;
  mainLight: HemisphericLight;
  character: Mesh;
}
