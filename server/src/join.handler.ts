import { JoinRequest } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";

export class JoinHandler implements Handler {
  handle(client: WebSocket, request: JoinRequest): void {
    console.log("join");
  }
}
