import WebSocket from "ws";

import { ShareHandler } from "./share.handler";
import { JoinHandler } from "./join.handler";
import { UpdateHandler } from "./update.handler";
import { Handler } from "./handler.interface";
import {
  Actions,
  ClientMessage,
  ClientResponse,
  ClientResponseData,
} from "./events.model";
import { PingHandler } from "./ping.handler";
import { MemoryStorage } from "./memory.storage";
import { v4 as uuidv4 } from "uuid";

export class EventsHandler {
  private client: WebSocket;
  private realmID: string;
  private id: string;

  // TODO: consider add "leave" event
  readonly handlers = {
    share: new ShareHandler(MemoryStorage.getInstance()),
    join: new JoinHandler(MemoryStorage.getInstance()),
    update: new UpdateHandler(MemoryStorage.getInstance()),
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
      console.error("Error parsing message", error, message);
      this.client.close();
      throw new Error("Error parsing message: [" + message + "]");
    }
  }

  send(action: Actions, data: ClientResponseData) {
    let message: string;
    try {
      const output: ClientResponse = <ClientResponse>{
        uuid: this.realmID,
        action: action,
        data: data,
      };
      message = JSON.stringify(output);
      this.client.send(message);
    } catch (error) {
      console.error("Error sending message", error, action, data, message);
      this.client.close();
      throw new Error("Error sending message " + message);
    }
  }

  parse(message: ClientMessage): Handler {
    console.log("action", message.action);
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
    try {
      MemoryStorage.getInstance().removeParticipant(this.realmID, this.id);
    } catch (error) {
      console.error("Error removing participant", error);
    }
  }
}
