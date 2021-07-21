export class RealmData {}

export class MemoryStorage {
  data: Map<string, RealmData> = new Map<string, RealmData>();
  addRealm(uuid: string) {
    if (this.data.has(uuid)) {
      throw new Error("uuid already in memory");
    } else {
      this.data.set(uuid, new RealmData());
    }
  }

  getRealm(uuid: string): RealmData {
    if (!this.data.has(uuid)) {
      throw new Error("uuid dont exist in memory");
    } else {
      return this.data.get(uuid);
    }
  }
}
