import WebSocket from "ws";

import { ShareHandler } from "./share.handler";
import { JoinHandler } from "./join.handler";
import { UpdateHandler } from "./update.handler";
import { Handler } from "./handler.interface";
import { ClientMessage } from "./events.model";
import { PingHandler } from "./ping.handler";
import { MemoryStorage } from "./memory.storage";

export class EventsHandler {
  private client: WebSocket;
  private memoryStorage = new MemoryStorage();

  readonly handlers = {
    share: new ShareHandler(this.memoryStorage),
    join: new JoinHandler(this.memoryStorage),
    update: new UpdateHandler(),
    ping: new PingHandler(),
  };

  constructor(client: WebSocket) {
    this.client = client;
  }

  onMessage(message: WebSocket.Data) {
    try {
      const input: ClientMessage = JSON.parse(message.toString());
      const handler = this.parse(input);
      handler.handle(this.client, input.data);
    } catch (error) {
      console.error("error parsing message", message);
      this.client.close();
    }
  }

  parse(message: ClientMessage): Handler {
    const handler = this.handlers[message.action];
    return handler;
  }
}
