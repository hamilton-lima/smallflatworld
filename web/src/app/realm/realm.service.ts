import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { Realm, RealmList, SceneElement } from './realm.model';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private realmList: RealmList;
  private currentRealm: Realm;

  constructor(private persistence: PersistenceService) {}

  async ready(): Promise<Realm> {
    try {
      this.realmList = await this.persistence.ready();
      this.currentRealm = await this.persistence.getRealm(
        this.realmList.currentRealm
      );

      console.log('[SMF] Realm setup is done', this.realmList, this.currentRealm);
      return this.currentRealm;

    } catch (error) {
      console.error('[SMF] Error on Realm setup', error);
      return null;
    }
  }

  getRealmList(): RealmList{
    return this.realmList;
  }

  getCurrentRealm(): Realm{
    return this.currentRealm;
  }

  // TODO: handle errors
  async add(element: SceneElement) {
    this.currentRealm.elements.push(element);
    const updated = await this.persistence.updateRealm(this.currentRealm);
    this.currentRealm._rev = updated.rev;
  }
}
