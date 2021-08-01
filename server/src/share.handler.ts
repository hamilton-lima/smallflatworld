import { Actions, ShareRequest, ShareResponse } from "./events.model";
import { Handler } from "./handler.interface";
import { v4 as uuidv4 } from "uuid";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class ShareHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(request: ShareRequest, parent: EventsHandler): void {
    console.log("share", request);

    const response: ShareResponse = {
      uuid: uuidv4(),
    };

    // set the realmID in the parent
    parent.setRealmID(response.uuid);

    // create the realm and add participant to it
    this.storage.addRealm(response.uuid);
    this.storage.removeParticipantFromAllRealms(parent.getID());
    this.storage.addParticipant(response.uuid, parent.getID(), parent);

    parent.send(Actions.Share, response);
  }
}
