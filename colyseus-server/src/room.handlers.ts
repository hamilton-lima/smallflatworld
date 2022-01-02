import {
  SceneElementMemento,
  SceneAudio,
  SceneCode,
  SceneImage,
  SceneDesign3D,
  CodeDefinition,
  Vector3Memento,
  Named,
  RealmSchema,
  Realm,
} from "./room.state";
import { MapSchema, Schema } from "@colyseus/schema";

export interface InstanceBuilder<Type> {
  create(update: Type): Type;
  update(list: MapSchema<Type>, update: Type): Type;
}

export class RealmSchemaBuilder {
  private constructor() {}
  static instance = new RealmSchemaBuilder();
  static getInstance() {
    return RealmSchemaBuilder.instance;
  }

  create(update: Realm): RealmSchema {
    const instance = new RealmSchema();
    instance.id = update.id;
    instance.name = update.name;
    this.assignSceneElement(instance.characters, update.characters);
    this.assignSceneElement(instance.elements, update.elements);
    this.assignSceneImage(instance.images, update.images);
    this.assignSceneAudio(instance.audios, update.audios);
    this.assignSceneCodes(instance.codes, update.codes);
    this.assignSceneDesign3D(instance.designs3D, update.designs3D);
    return instance;
  }

  assignSceneDesign3D(
    list: MapSchema<SceneDesign3D>,
    input: Map<string, SceneDesign3D>
  ) {
    for (let [key, value] of Object.entries(input)) {
      const instance = SceneDesign3DBuilder.getInstance().create(value);
      list.set(key, instance);
    }
  }

  assignSceneCodes(list: MapSchema<SceneCode>, input: Map<string, SceneCode>) {
    for (let [key, value] of Object.entries(input)) {
      const instance = SceneCodeBuilder.getInstance().create(value);
      list.set(key, instance);
    }
  }

  assignSceneAudio(
    list: MapSchema<SceneAudio>,
    input: Map<string, SceneAudio>
  ) {
    for (let [key, value] of Object.entries(input)) {
      const instance = SceneAudioBuilder.getInstance().create(value);
      list.set(key, instance);
    }
  }

  assignSceneImage(
    list: MapSchema<SceneImage>,
    input: Map<string, SceneImage>
  ) {
    for (let [key, value] of Object.entries(input)) {
      const instance = SceneImageBuilder.getInstance().create(value);
      list.set(key, instance);
    }
  }

  assignSceneElement(
    list: MapSchema<SceneElementMemento>,
    input: Map<string, SceneElementMemento>
  ) {
    for (let [key, value] of Object.entries(input)) {
      const instance = SceneElementMementoBuilder.getInstance().create(value);
      list.set(key, instance);
    }
  }
}

export class SceneElementMementoBuilder
  implements InstanceBuilder<SceneElementMemento>
{
  private constructor() {}
  static instance = new SceneElementMementoBuilder();
  static getInstance() {
    return SceneElementMementoBuilder.instance;
  }

  create(update: SceneElementMemento) {
    const instance = new SceneElementMemento();
    instance.name = update.name;
    instance.componentID = update.componentID;
    instance.imageName = update.imageName;
    instance.skipColision = update.skipColision;
    instance.position = new Vector3Memento().assign(update.position);
    instance.rotation = new Vector3Memento().assign(update.rotation);
    instance.scaling = new Vector3Memento().assign(update.scaling);
    instance.code = new CodeDefinition().assign(update.code);
    return instance;
  }

  update(
    list: MapSchema<SceneElementMemento>,
    update: SceneElementMemento
  ): SceneElementMemento {
    const current = list.get(update.name);
    current.position.assign(update.position);
    current.rotation.assign(update.rotation);
    current.scaling.assign(update.scaling);
    current.code.assign(update.code);
    return current;
  }
}

export class SceneImageBuilder implements InstanceBuilder<SceneImage> {
  private constructor() {}
  static instance = new SceneImageBuilder();
  static getInstance() {
    return SceneImageBuilder.instance;
  }

  create(update: SceneImage) {
    const instance = new SceneImage().assign(update);
    return instance;
  }

  update(list: MapSchema<SceneImage>, update: SceneImage): SceneImage {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneDesign3DBuilder implements InstanceBuilder<SceneDesign3D> {
  private constructor() {}
  static instance = new SceneDesign3DBuilder();
  static getInstance() {
    return SceneDesign3DBuilder.instance;
  }

  create(update: SceneDesign3D) {
    const instance = new SceneDesign3D().assign(update);
    return instance;
  }

  update(list: MapSchema<SceneDesign3D>, update: SceneDesign3D): SceneDesign3D {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneAudioBuilder implements InstanceBuilder<SceneAudio> {
  private constructor() {}
  static instance = new SceneAudioBuilder();
  static getInstance() {
    return SceneAudioBuilder.instance;
  }

  create(update: SceneAudio) {
    const instance = new SceneAudio().assign(update);
    return instance;
  }

  update(list: MapSchema<SceneAudio>, update: SceneAudio): SceneAudio {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneCodeBuilder implements InstanceBuilder<SceneCode> {
  private constructor() {}
  static instance = new SceneCodeBuilder();
  static getInstance() {
    return SceneCodeBuilder.instance;
  }

  create(update: SceneCode) {
    const instance = new SceneCode();
    instance.name = update.name;
    instance.label = update.label;
    instance.code = new CodeDefinition().assign(update.code);
    return instance;
  }

  update(list: MapSchema<SceneCode>, update: SceneCode): SceneCode {
    const current = list.get(update.name);
    current.label = update.label;
    current.code.assign(update.code);
    return current;
  }
}

export class MessageHandler<Type extends Named> {
  list: MapSchema<Type>;
  handler: InstanceBuilder<Type>;

  constructor(list: MapSchema<Type>, handler: InstanceBuilder<Type>) {
    this.list = list;
    this.handler = handler;
  }

  handle(message: any) {
    if (message.action == "add") {
      const instance = this.handler.create(message.data);
      this.list.set(instance.name, instance);
    }

    if (message.action == "update") {
      this.handler.update(this.list, message.data);
    }

    if (message.action == "remove") {
      this.list.delete(message.data.name);
    }
  }
}
