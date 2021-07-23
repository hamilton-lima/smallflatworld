import WebSocket from "ws";

import { ShareHandler } from "./share.handler";
import { JoinHandler } from "./join.handler";
import { UpdateHandler } from "./update.handler";
import { Handler } from "./handler.interface";
import { ClientMessage } from "./events.model";
import { PingHandler } from "./ping.handler";
import { MemoryStorage } from "./memory.storage";
import { v4 as uuidv4 } from "uuid";

export class EventsHandler {
  private client: WebSocket;
  private realmID: string;
  private id: string;

  readonly handlers = {
    share: new ShareHandler(MemoryStorage.getInstance()),
    join: new JoinHandler(MemoryStorage.getInstance()),
    update: new UpdateHandler(MemoryStorage.getInstance()),
    // TODO: consider add "leave" event
    ping: new PingHandler(),
  };

  constructor(client: WebSocket) {
    this.client = client;
    this.id = uuidv4();
  }

  onMessage(message: WebSocket.Data) {
    try {
      const input: ClientMessage = JSON.parse(message.toString());
      const handler = this.parse(input);
      handler.handle(this.client, input.data, this);
    } catch (error) {
      console.error("error parsing message", error, message);
      this.client.close();
    }
  }

  parse(message: ClientMessage): Handler {
    const handler = this.handlers[message.action];
    return handler;
  }

  setRealmID(id: string) {
    this.realmID = id;
  }

  getRealmID() {
    return this.realmID;
  }

  getID() {
    return this.id;
  }

  onClose() {
    MemoryStorage.getInstance().removeParticipant(this.realmID, this.id);
  }
}
