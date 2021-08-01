import { Actions, JoinRequest, JoinResponse } from "./events.model";
import { Handler } from "./handler.interface";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class JoinHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(request: JoinRequest, parent: EventsHandler): void {
    console.log("join", request);
    const response: JoinResponse = {
      ready: false,
      data: null,
    };

    try {
      response.data = this.storage.getRealmState(request.uuid);
      response.ready = true;
      
      parent.setRealmID(request.uuid);
      this.storage.removeParticipantFromAllRealms(parent.getID());
      this.storage.addParticipant(request.uuid, parent.getID(), parent);
      // TODO: notify all participants about the new participant
    } catch (error) {
      console.error("realm not found", request.uuid);
    }

    parent.send(Actions.Join, response);
  }
}
