import { StateUpdate } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class UpdateHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(client: WebSocket, request: StateUpdate, parent: EventsHandler): void {
    console.log("update");
    request.data.forEach((element) => {
      this.storage.update(parent.getRealmID(), element);
    });

    const payload = JSON.stringify(request);

    // sends udpates to all participants
    this.storage
      .getStorage(parent.getRealmID())
      .participants.map.forEach((participant: WebSocket, key: string) => {
        participant.send(payload);
      });
  }
}
