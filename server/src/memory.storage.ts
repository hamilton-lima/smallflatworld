import { SceneElement, StateUpdate } from "./events.model";

class StateUpdateCached {
  map: Map<string, SceneElement>;

  constructor() {
    this.map = new Map<string, SceneElement>();
  }
}

export class MemoryStorage {
  data: Map<string, StateUpdateCached> = new Map<string, StateUpdateCached>();

  addRealm(uuid: string) {
    if (this.data.has(uuid)) {
      throw new Error("uuid already in memory");
    } else {
      this.data.set(uuid, new StateUpdateCached());
    }
  }

  getRealmState(uuid: string): StateUpdate {
    if (!this.data.has(uuid)) {
      throw new Error("uuid dont exist in memory");
    } else {
      const data = this.data.get(uuid);
      const array = Array.from(data.map.values());
      const result = <StateUpdate>{
        data: array,
      };
      return result;
    }
  }
}
