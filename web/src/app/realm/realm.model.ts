import { Vector3 } from '@babylonjs/core';

export class PouchDBDocument {
  _id: string;
  _rev: string;
}

export class SceneElement extends PouchDBDocument {
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export class RealmInfo extends PouchDBDocument {
  name: string;
}

export class Realm extends PouchDBDocument {
  name: string;
  elements: SceneElement[];
}

export class RealmList extends PouchDBDocument {
  currentRealm: string;
  realms: RealmInfo[];
}
