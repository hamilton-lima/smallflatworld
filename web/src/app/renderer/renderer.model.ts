import { Engine, Camera, Scene, HemisphericLight, Mesh, Vector3 } from '@babylonjs/core';
import { CodeDefinition } from '../../../../server/src/events.model';

export class EngineState {
  engine: Engine;
  scene: Scene;
  camera: Camera;
  mainLight: HemisphericLight;
  character: Mesh;
}

export class SceneElement {
  name: string;
  componentID: string;
  position: Vector3;
  rotation: Vector3;
  scaling: Vector3;
  code: CodeDefinition
}