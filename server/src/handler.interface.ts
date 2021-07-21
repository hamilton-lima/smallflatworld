import { ClientData } from "./events.model";
import WebSocket from "ws";

export interface Handler {
  handle(client: WebSocket, request: ClientData): void;
}
