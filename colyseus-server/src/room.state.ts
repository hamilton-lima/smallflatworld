import { Schema, ArraySchema, MapSchema, type } from "@colyseus/schema";

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
  UpdateElements = "UpdateElements"
}

export class Vector3Memento extends Schema {
  @type("number") x: number;
  @type("number") y: number;
  @type("number") z: number;
}

export class CodeDefinition extends Schema {
  @type("string") code: string;
  @type("string") blocklyDefinition: string;
}

export class SceneElementMemento extends Schema {
  @type("string") name: string;
  @type("string") componentID: string;
  @type(Vector3Memento) position: Vector3Memento = new Vector3Memento();
  @type(Vector3Memento) rotation: Vector3Memento = new Vector3Memento();
  @type(Vector3Memento) scaling: Vector3Memento = new Vector3Memento();
  @type(CodeDefinition) code: CodeDefinition = new CodeDefinition();
  @type("string") imageName: string;
  @type("boolean") skipColision: boolean;
}

export class SceneImage extends Schema {
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneDesign3D extends Schema {
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneAudio extends Schema {
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneCode extends Schema {
  @type("string") name: string;
  @type("string") label: string;
  @type(CodeDefinition) code: CodeDefinition = new CodeDefinition();
}

export class Realm extends Schema {
  @type("string") id: string;
  @type("string") name: string;
  @type({ map: SceneElementMemento }) characters = new MapSchema<SceneElementMemento>();
  @type({ map: SceneElementMemento }) elements = new MapSchema<SceneElementMemento>();
  @type({ map: SceneImage }) images = new MapSchema<SceneImage>();
  @type({ map: SceneAudio }) audios = new MapSchema<SceneAudio>();
  @type({ map: SceneCode }) codes = new MapSchema<SceneCode>();
  @type({ map: SceneDesign3D }) designs3D = new MapSchema<SceneDesign3D>();
}
