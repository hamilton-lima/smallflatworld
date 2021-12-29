export enum Actions {
  Share = "share",
  Join = "join",
  Update = "update",
  Delete = "delete",
  Ping = "ping",
  DeleteImage = "delete-image",
  DeleteAudio = "delete-audio",
  DeleteCode = "delete-code",
  DeleteDesign3D = "delete-design3D",
  DeleteElement = "DeleteElement",
  UpdateDesigns3D = "UpdateDesigns3D",
  UpdateCodes = "UpdateCodes",
  UpdateAudios = "UpdateAudios",
  UpdateImages = "UpdateImages",
  UpdateElemens = "UpdateElemens"
}

export class ClientMessage {
  action: Actions;
  data: ClientData;
}

// Abstract response from all types of requests
export class ClientResponse {
  uuid: string;
  action: Actions;
  data: ClientResponseData;
}

export interface ClientData { }
export interface ClientResponseData { }

export class JoinRequest implements ClientData {
  uuid: string;
}

export class JoinResponse implements ClientResponseData {
  ready: boolean;
  data: Realm;
}

export class Vector3Memento {
  x: number;
  y: number;
  z: number;
}

export const Vector3MementoZero = <Vector3Memento>{
  x: 0,
  y: 0,
  z: 0,
};

export const Vector3MementoOne = <Vector3Memento>{
  x: 1,
  y: 1,
  z: 1,
};

export class CodeDefinition {
  code: string;
  blocklyDefinition?: string;
}

export class SceneElementMemento {
  name: string;
  componentID: string;
  position: Vector3Memento;
  rotation: Vector3Memento;
  scaling: Vector3Memento;
  code: CodeDefinition;
  imageName: string;
  skipColision: boolean;
}

export class SceneImage {
  name: string;
  base64: string;
}

export class SceneDesign3D {
  name: string;
  base64: string;
}

export class SceneAudio {
  name: string;
  base64: string;
}

export class SceneCode {
  name: string;
  label: string;
  code: CodeDefinition;
}

export class Realm implements ClientData, ClientResponseData {
  id: string;
  name: string;
  characters: SceneElementMemento[];
  elements: SceneElementMemento[];
  images: SceneImage[];
  audios: SceneAudio[];
  codes: SceneCode[];
  designs3D: SceneDesign3D[];
}

export class ShareRequest implements ClientData { }

export class ShareResponse implements ClientResponseData {
  uuid: string;
}

export class DeleteRequest implements ClientData {
  name: string;
}

export class DeleteResponse implements ClientResponseData {
  deleted: boolean;
}

export class PingRequest implements ClientData { }

export class PingResponse implements ClientResponseData {
  data: string;
}
