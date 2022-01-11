export enum Actions {
  Share = 'share',
  Join = 'join',
  Update = 'update',
  Delete = 'delete',
  Ping = 'ping',
  DeleteImage = 'delete-image',
  DeleteAudio = 'delete-audio',
  DeleteCode = 'delete-code',
  DeleteDesign3D = 'delete-design3D',
  DeleteElement = 'DeleteElement',
  UpdateDesigns3D = 'UpdateDesigns3D',
  UpdateCodes = 'UpdateCodes',
  UpdateAudios = 'UpdateAudios',
  UpdateImages = 'UpdateImages',
  UpdateElements = 'UpdateElements',
  AddElement = 'AddElement',
}

export interface Named {
  name: string;
}

export class Vector3Memento {
  x: number = 0;
  y: number = 0;
  z: number = 0;
}

export class CodeDefinition {
  code: string;
  blocklyDefinition: string;
}

export class SceneElementMemento implements Named {
  name: string;
  componentID: string;
  position: Vector3Memento = new Vector3Memento();
  rotation: Vector3Memento = new Vector3Memento();
  scaling: Vector3Memento = new Vector3Memento();
  code: CodeDefinition = new CodeDefinition();
  imageName: string;
  skipColision: boolean;
}

export class SceneImage implements Named {
  name: string;
  base64: string;
}

export class SceneDesign3D implements Named {
  name: string;
  base64: string;
}

export class SceneAudio implements Named {
  name: string;
  base64: string;
}

export class SceneCode implements Named {
  name: string;
  label: string;
  code: CodeDefinition = new CodeDefinition();
}

export const REALM_MAPS = [
  'elements',
  'characters',
  'audios',
  'codes',
  'designs3D',
  'images',
];

export class Realm {
  id: string;
  name: string;
  characters = new Map<string, SceneElementMemento>();
  elements = new Map<string, SceneElementMemento>();
  images = new Map<string, SceneImage>();
  audios = new Map<string, SceneAudio>();
  codes = new Map<string, SceneCode>();
  designs3D = new Map<string, SceneDesign3D>();
}
