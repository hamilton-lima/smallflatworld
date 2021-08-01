import { SceneElement, StateUpdate } from "./events.model";
import { EventsHandler } from "./events.handler";

class StateUpdateCached {
  map: Map<string, SceneElement>;

  constructor() {
    this.map = new Map<string, SceneElement>();
  }
}

class Participants {
  map: Map<string, EventsHandler>;

  constructor() {
    this.map = new Map<string, EventsHandler>();
  }
}

export class Storage {
  states: StateUpdateCached;
  participants: Participants;

  constructor() {
    this.states = new StateUpdateCached();
    this.participants = new Participants();
  }
}

export class MemoryStorage {
  private static instance: MemoryStorage = new MemoryStorage();
  private data: Map<string, Storage>;

  private constructor() {
    this.reset();
  }

  public static getInstance() {
    return MemoryStorage.instance;
  }

  reset() {
    this.data = new Map<string, Storage>();
  }

  addRealm(uuid: string) {
    if (this.data.has(uuid)) {
      throw new Error("uuid already in memory");
    } else {
      this.data.set(uuid, new Storage());
    }
  }

  getStorage(uuid: string): Storage {
    if (!this.data.has(uuid)) {
      throw new Error("uuid dont exist in memory");
    } else {
      return this.data.get(uuid);
    }
  }

  getRealmState(uuid: string): StateUpdate {
    const data = this.getStorage(uuid);
    const array = Array.from(data.states.map.values());
    const result = <StateUpdate>{
      data: array,
    };
    return result;
  }

  update(uuid: string, element: SceneElement) {
    const state = this.getStorage(uuid).states;
    state.map.set(element.name, element);
  }

  addParticipant(realmID: string, clientID: string, participant: EventsHandler) {
    const storage = this.getStorage(realmID);
    storage.participants.map.set(clientID, participant);
  }

  removeParticipant(realmID: string, clientID: string) {
    const storage = this.getStorage(realmID);
    storage.participants.map.delete(clientID);
  }

  removeParticipantFromAllRealms(clientID: string) {
    this.data.forEach((storage: Storage) => {
      storage.participants.map.delete(clientID);
    });
  }
}
