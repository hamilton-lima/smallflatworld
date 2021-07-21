import { ShareRequest } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";

export class ShareHandler implements Handler {
  handle(client: WebSocket, request: ShareRequest): void {
    console.log("share");
  }
}
