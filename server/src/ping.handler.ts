import { PingRequest, PingResponse } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";

export class PingHandler implements Handler {
    readonly result = JSON.stringify(<PingResponse>{ data: "pong"});

    handle(client: WebSocket, request: PingRequest): void {
      console.log("ping");
      client.send(this.result);
    }
}
