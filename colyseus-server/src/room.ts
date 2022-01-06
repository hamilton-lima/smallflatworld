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
  RealmSchemaBuilder,
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

    this.state.characters.onAdd = function(add, key){
      console.log('on add triggered on server side', key, add);
    };

    this.state.characters.onChange = function(add, key){
      console.log('on change triggered on server side', key, add);
    };
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
    const realm: Realm = JSON.parse(options.realm);
    const result = RealmSchemaBuilder.getInstance().create(realm);
    console.log("created realm schema", result);
    return result;
  }

  onJoin(client: Client, options: RealmShareOptions) {
    const character = this.state.characters.get(options.characterId);
    console.log('character found?', character);
    if (!character) {
      const joinedCharacter =
        SceneElementMementoBuilder.getInstance().createDefault(
          options.characterId
        );
      this.state.characters.set(options.characterId, joinedCharacter);
    }

    const counter = this.state.characters.size;
    this.state.characters.triggerAll();

    console.log(client.sessionId, "joined!", options, "total characters", counter, "state.name", this.state.name);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
