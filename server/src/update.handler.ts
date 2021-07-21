import { StateUpdate } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";

export class UpdateHandler implements Handler {
  handle(client: WebSocket, request: StateUpdate): void {
    console.log("update");
  }
}

