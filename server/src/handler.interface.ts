import { ClientData } from "./events.model";
import { EventsHandler } from "./events.handler";

export interface Handler {
  handle(request: ClientData, parent: EventsHandler): void;
}
