import { Actions, StateUpdate } from "./events.model";
import { Handler } from "./handler.interface";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class UpdateHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(request: StateUpdate, parent: EventsHandler): void {
    request.data.forEach((element) => {
      this.storage.update(parent.getRealmID(), element);
    });

    // TODO: sanitize request to prevent propagation of issues

    // sends udpates to all participants
    this.storage
      .getStorage(parent.getRealmID())
      .participants.map.forEach((participant: EventsHandler, key: string) => {
        participant.send(Actions.Update, request);
      });
  }
}
