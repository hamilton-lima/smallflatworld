import { Vector3 } from '@babylonjs/core';

export class SceneElement {
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export class RealmInfo {
  _id: string;
  name: string;
}

export class Realm {
  _id: string;
  name: string;
  elements: SceneElement[];
}

export class RealmList {
  _id: string;
  currentRealm: string;
  realms: RealmInfo[];
}
