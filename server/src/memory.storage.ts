import { SceneElement, StateUpdate } from "./events.model";

class StateUpdateCached {
  map: Map<string, SceneElement>;

  constructor() {
    this.map = new Map<string, SceneElement>();
  }
}

export class MemoryStorage {
  private static instance: MemoryStorage = new MemoryStorage();
  private data: Map<string, StateUpdateCached>;

  private constructor() {
    this.reset();
  }

  public static getInstance() {
    return MemoryStorage.instance;
  }

  reset() {
    this.data = new Map<string, StateUpdateCached>();
  }

  addRealm(uuid: string) {
    if (this.data.has(uuid)) {
      throw new Error("uuid already in memory");
    } else {
      this.data.set(uuid, new StateUpdateCached());
    }
  }

  getCachedRealmState(uuid: string): StateUpdateCached {
    if (!this.data.has(uuid)) {
      throw new Error("uuid dont exist in memory");
    } else {
      return this.data.get(uuid);
    }
  }

  getRealmState(uuid: string): StateUpdate {
    const data = this.getCachedRealmState(uuid);
    const array = Array.from(data.map.values());
    const result = <StateUpdate>{
      data: array,
    };
    return result;
  }

  update(uuid: string, element: SceneElement) {
    const state = this.getCachedRealmState(uuid);
    state.map.set(element.name, element);
  }
}
