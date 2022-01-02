import { Room, Client } from "colyseus";
import {
  RealmSchema,
  SceneElementMemento,
  REALM_MAPS,
  SceneAudio,
  SceneCode,
  SceneImage,
  SceneDesign3D,
  CodeDefinition,
  Vector3Memento,
} from "./room.state";
import { MapSchema, Schema } from "@colyseus/schema";

export interface InstanceBuilder<Type> {
  create(list: MapSchema<Type>, update: Type): Type;
  update(list: MapSchema<Type>, update: Type): Type;
}

export class SceneElementMementoBuilder
  implements InstanceBuilder<SceneElementMemento>
{
  create(list: MapSchema<SceneElementMemento>, update: SceneElementMemento) {
    const instance = new SceneElementMemento();
    instance.name = update.name;
    instance.componentID = update.componentID;
    instance.imageName = update.imageName;
    instance.skipColision = update.skipColision;
    instance.position = new Vector3Memento().assign(update.position);
    instance.rotation = new Vector3Memento().assign(update.rotation);
    instance.scaling = new Vector3Memento().assign(update.scaling);
    instance.code = new CodeDefinition().assign(update.code);
    list.set(instance.name, instance);
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
  create(list: MapSchema<SceneImage>, update: SceneImage) {
    const instance = new SceneImage().assign(update);
    list.set(instance.name, instance);
    return instance;
  }

  update(list: MapSchema<SceneImage>, update: SceneImage): SceneImage {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneDesign3DBuilder implements InstanceBuilder<SceneDesign3D> {
  create(list: MapSchema<SceneDesign3D>, update: SceneDesign3D) {
    const instance = new SceneDesign3D().assign(update);
    list.set(instance.name, instance);
    return instance;
  }

  update(list: MapSchema<SceneDesign3D>, update: SceneDesign3D): SceneDesign3D {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneAudioBuilder implements InstanceBuilder<SceneAudio> {
  create(list: MapSchema<SceneAudio>, update: SceneAudio) {
    const instance = new SceneAudio().assign(update);
    list.set(instance.name, instance);
    return instance;
  }

  update(list: MapSchema<SceneAudio>, update: SceneAudio): SceneAudio {
    const current = list.get(update.name);
    current.base64 = update.base64;
    return current;
  }
}

export class SceneCodeBuilder implements InstanceBuilder<SceneCode> {
  create(list: MapSchema<SceneCode>, update: SceneCode) {
    const instance = new SceneCode();
    instance.name = update.name;
    instance.label = update.label;
    instance.code = new CodeDefinition().assign(update.code);
    list.set(instance.name, instance);
    return instance;
  }

  update(list: MapSchema<SceneCode>, update: SceneCode): SceneCode {
    const current = list.get(update.name);
    current.label = update.label;
    current.code.assign(update.code);
    return current;
  }
}

class MessageHandler<Type extends Schema> {
  list: MapSchema<Type>;
  handler: InstanceBuilder<Type>;

  constructor(list: MapSchema<Type>, handler: InstanceBuilder<Type>) {
    this.list = list;
    this.handler = handler;
  }

  handle(message: any) {
    if (message.action == "add") {
      this.handler.create(this.list, message.data);
    }
    if (message.action == "update") {
      this.handler.update(this.list, message.data);
    }
    if (message.action == "remove") {
      this.list.delete(message.data.name);
    }
  }
}

export class MyRoom extends Room<RealmSchema> {
  handlers: Map<string, MessageHandler<any>> = new Map();

  constructor() {
    super();
  }

  setup(){
    this.handlers.set(
      "elements",
      new MessageHandler<SceneElementMemento>(
        this.state.elements,
        new SceneElementMementoBuilder()
      )
    );
    this.handlers.set(
      "characters",
      new MessageHandler<SceneElementMemento>(
        this.state.characters,
        new SceneElementMementoBuilder()
      )
    );
    this.handlers.set(
      "audios",
      new MessageHandler<SceneAudio>(this.state.audios, new SceneAudioBuilder())
    );
    this.handlers.set(
      "codes",
      new MessageHandler<SceneCode>(this.state.codes, new SceneCodeBuilder())
    );
    this.handlers.set(
      "designs3D",
      new MessageHandler<SceneDesign3D>(
        this.state.designs3D,
        new SceneDesign3DBuilder()
      )
    );
    this.handlers.set(
      "images",
      new MessageHandler<SceneImage>(this.state.images, new SceneImageBuilder())
    );
  }

  onCreate(options: any) {
    console.log('on create', options);
    const realm = new RealmSchema();
    this.setState(realm);
    this.setup();

    // Add message handlers for each map
    REALM_MAPS.forEach((map) => {
      this.onMessage(map, (client, message) => {
        console.log("on message", client.id, message);
        const handler = this.handlers.get(map);
        handler.handle(message);
      });
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!", options);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
