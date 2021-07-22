import { JoinRequest, JoinResponse } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";
import { MemoryStorage } from "./memory.storage";

export class JoinHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(client: WebSocket, request: JoinRequest): void {
    console.log("join", request);
    const response: JoinResponse = {
      ready: false,
      data: null,
    };

    try {
      response.data = this.storage.getRealmState(request.uuid);
      response.ready = true;
    } catch (error) {
      console.error("realm not found", request.uuid);
    }

    const payload = JSON.stringify(response);
    client.send(payload);
  }
}
