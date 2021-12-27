import { Actions, Realm } from "./events.model";
import { Handler } from "./handler.interface";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class UpdateHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(request: Realm, parent: EventsHandler): void {
    // TODO: Handle all fields
    request.data.forEach((element) => {
      this.storage.update(parent.getRealmID(), element);
    });

    // sends udpates to all participants
    this.storage
      .getStorage(parent.getRealmID())
      .participants.map.forEach((participant: EventsHandler, key: string) => {
        participant.send(Actions.Update, request);
      });
  }
}
