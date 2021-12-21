import { Engine, Camera, Scene, HemisphericLight, Mesh, Vector3, AnimationGroup } from '@babylonjs/core';
import { CodeDefinition } from '../../../../server/src/events.model';

export class CharacterAnimations {
  jump: AnimationGroup;
  walk: AnimationGroup;
}

export class EngineState {
  engine: Engine;
  scene: Scene;
  camera: Camera;
  mainLight: HemisphericLight;
  character: Mesh;
  animations: CharacterAnimations;
}

export class SceneElement {
  name: string;
  componentID: string;
  position: Vector3;
  rotation: Vector3;
  scaling: Vector3;
  code: CodeDefinition;
  imageName: string;
  skipColision: boolean;
}