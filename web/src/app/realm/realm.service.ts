import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { Realm, RealmList, SceneElement } from './realm.model';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private realmList: RealmList;
  private currentRealm: Realm;

  constructor(private persistence: PersistenceService) {
    // TODO: wait for this to be ready
    this.setup().then(() => {
      console.log('setup is done');
    }, (error)=>{
      console.error('[SMF] Error on Realm setup', error);
    });
  }

  async setup() {
    this.realmList = await this.persistence.getRealmList();
    this.currentRealm = await this.persistence.getRealm(
      this.realmList.currentRealm
    );
  }

  // TODO: support multiple realms

  // TODO: handle errors
  add(element: SceneElement) {
    this.currentRealm.elements.push(element);
    this.persistence.updateRealm(this.currentRealm);
  }
}
