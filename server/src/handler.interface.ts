import { ClientData } from "./events.model";
import WebSocket from "ws";
import { EventsHandler } from "./events.handler";

export interface Handler {
  handle(client: WebSocket, request: ClientData, parent: EventsHandler): void;
}
