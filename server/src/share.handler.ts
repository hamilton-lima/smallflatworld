import { ShareRequest, ShareResponse } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";
import { v4 as uuidv4 } from "uuid";
import { MemoryStorage } from "./memory.storage";

export class ShareHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(client: WebSocket, request: ShareRequest): void {
    console.log("share", request);

    const response: ShareResponse = {
      uuid: uuidv4(),
    };

    this.storage.addRealm(response.uuid);
    const payload = JSON.stringify(response);
    client.send(payload);
  }
}
