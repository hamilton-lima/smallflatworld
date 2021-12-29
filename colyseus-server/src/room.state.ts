import { Schema, ArraySchema, type } from "@colyseus/schema";

export class Vector3Memento extends Schema {
  @type("number") x: number;
  @type("number") y: number;
  @type("number") z: number;
}

export class CodeDefinition extends Schema{
  @type("string") code: string;
  @type("string") blocklyDefinition: string;
}

export class SceneElementMemento extends Schema{
  @type("string") name: string;
  @type("string") componentID: string;
  @type(Vector3Memento) position: Vector3Memento = new Vector3Memento();
  @type(Vector3Memento) rotation: Vector3Memento = new Vector3Memento();
  @type(Vector3Memento) scaling: Vector3Memento = new Vector3Memento();
  @type(CodeDefinition) code: CodeDefinition = new CodeDefinition();
  @type("string") imageName: string;
  @type("boolean") skipColision: boolean;
}

export class SceneImage extends Schema{
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneDesign3D extends Schema{
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneAudio extends Schema{
  @type("string") name: string;
  @type("string") base64: string;
}

export class SceneCode extends Schema{
  @type("string") name: string;
  @type("string") label: string;
  @type(CodeDefinition) code: CodeDefinition = new CodeDefinition();
}

export class Realm extends Schema {
  @type("string") id: string;
  @type("string") name: string;
  @type([ SceneElementMemento ]) characters = new ArraySchema<SceneElementMemento>();
  @type([ SceneElementMemento ]) elements = new ArraySchema<SceneElementMemento>();
  @type([ SceneImage ]) images = new ArraySchema<SceneImage>();
  @type([ SceneAudio ]) audios = new ArraySchema<SceneAudio>();
  @type([ SceneCode ]) codes = new ArraySchema<SceneCode>();
  @type([ SceneDesign3D ]) designs3D = new ArraySchema<SceneDesign3D>();
}
