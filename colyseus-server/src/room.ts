import { Room, Client } from "colyseus";
import {
  RealmSchema,
  SceneElementMemento,
  REALM_MAPS,
  SceneAudio,
  SceneCode,
  SceneImage,
  SceneDesign3D,
  Realm,
} from "./room.state";
import {
  MessageHandler,
  SceneAudioBuilder,
  SceneCodeBuilder,
  SceneDesign3DBuilder,
  SceneElementMementoBuilder,
  SceneImageBuilder,
} from "./room.handlers";
import { MapSchema } from "@colyseus/schema";

class RealmShareOptions {
  realm: string;
  characterId: string;
}

export class MyRoom extends Room<RealmSchema> {
  handlers: Map<string, MessageHandler<any>> = new Map();

  constructor() {
    super();
  }

  setup() {
    this.handlers.set(
      "elements",
      new MessageHandler<SceneElementMemento>(
        this.state.elements,
        SceneElementMementoBuilder.getInstance()
      )
    );
    this.handlers.set(
      "characters",
      new MessageHandler<SceneElementMemento>(
        this.state.characters,
        SceneElementMementoBuilder.getInstance()
      )
    );
    this.handlers.set(
      "audios",
      new MessageHandler<SceneAudio>(
        this.state.audios,
        SceneAudioBuilder.getInstance()
      )
    );
    this.handlers.set(
      "codes",
      new MessageHandler<SceneCode>(
        this.state.codes,
        SceneCodeBuilder.getInstance()
      )
    );
    this.handlers.set(
      "designs3D",
      new MessageHandler<SceneDesign3D>(
        this.state.designs3D,
        SceneDesign3DBuilder.getInstance()
      )
    );
    this.handlers.set(
      "images",
      new MessageHandler<SceneImage>(
        this.state.images,
        SceneImageBuilder.getInstance()
      )
    );
  }

  onCreate(options: RealmShareOptions) {
    console.log("on create", options);
    const realm = this.buildState(options);
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

  buildState(options: RealmShareOptions): RealmSchema {
    const result = new RealmSchema();
    const realm: Realm = JSON.parse(options.realm);
    result.id = realm.id;
    result.name = realm.name;
    console.log("parsed realm", realm);

    REALM_MAPS.forEach((map) => {
      const input = (realm as any)[map];
      if (input) {
        const entries = Object.entries(input);
        console.log("build map from entries", map, entries);
        // TODO: add method to message Handlers to rebuild realm
        (result as any)[map] = new MapSchema(input);
      } else {
        console.log("no data sent for map", map);
      }
    });

    return result;
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
