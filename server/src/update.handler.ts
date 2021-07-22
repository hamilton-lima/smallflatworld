import { StateUpdate } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";
import { MemoryStorage } from "./memory.storage";

export class UpdateHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }
  
  handle(client: WebSocket, request: StateUpdate): void {
    console.log("update");
  }
}

