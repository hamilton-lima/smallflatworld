import { Vector3 } from '@babylonjs/core';

export class SceneElement {
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export class Realm {
  id: string;
  name: string;
  character: SceneElement;
  elements: SceneElement[];
}

export class Configuration {
  currentRealm: string;
}
