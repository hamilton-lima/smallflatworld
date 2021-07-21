import WebSocket from "ws";
import { v4 as uuidv4 } from "uuid";
import { ShareHandler } from "./share.handler";
import { JoinHandler } from "./join.handler";
import { UpdateHandler } from "./update.handler";
import { Handler } from "./handler.interface";
import { ClientMessage } from "./events.model";
import { PingHandler } from "./ping.handler";

const handlers = {
  share: new ShareHandler(),
  join: new JoinHandler(),
  update: new UpdateHandler(),
  ping: new PingHandler(),
};

uuidv4();
export class EventsHandler {
  private client: WebSocket;

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
    const handler = handlers[message.action];
    return handler;
  }
}
