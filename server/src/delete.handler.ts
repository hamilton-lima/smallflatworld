import { Actions, DeleteRequest, StateUpdate } from "./events.model";
import { Handler } from "./handler.interface";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class DeleteHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(request: DeleteRequest, parent: EventsHandler): void {
      this.storage.delete(parent.getRealmID(), request.name);

    // TODO: sanitize request to prevent propagation of issues

    // sends udpates to all participants
    this.storage
      .getStorage(parent.getRealmID())
      .participants.map.forEach((participant: EventsHandler, key: string) => {
        participant.send(Actions.Delete, request);
      });
  }
}
