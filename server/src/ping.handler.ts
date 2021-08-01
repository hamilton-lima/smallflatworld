import { Actions, PingRequest, PingResponse } from "./events.model";
import { Handler } from "./handler.interface";
import { EventsHandler } from "./events.handler";

export class PingHandler implements Handler {
  readonly result = <PingResponse>{ data: "pong" };

  handle(request: PingRequest, parent: EventsHandler): void {
    parent.send(Actions.Ping, this.result);
  }
}
