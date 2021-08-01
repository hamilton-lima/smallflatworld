import { JoinRequest, JoinResponse } from "./events.model";
import { Handler } from "./handler.interface";
import WebSocket from "ws";
import { MemoryStorage } from "./memory.storage";
import { EventsHandler } from "./events.handler";

export class JoinHandler implements Handler {
  storage: MemoryStorage;
  constructor(storage: MemoryStorage) {
    this.storage = storage;
  }

  handle(client: WebSocket, request: JoinRequest, parent: EventsHandler): void {
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
      this.storage.addParticipant(request.uuid, parent.getID(), client);
      // TODO: notify all participants about the new participant
    } catch (error) {
      console.error("realm not found", request.uuid);
    }

    const payload = JSON.stringify(response);
    console.log('join payload', payload);
    client.send(payload);
  }
}
