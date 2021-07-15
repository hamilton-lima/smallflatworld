import { Injectable } from '@angular/core';
import { Vector3 } from '@babylonjs/core';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { PersistenceService } from './persistence.service';
import { Realm, RealmList, SceneElement } from './realm.model';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private realmList: RealmList;
  private currentRealm: Realm;

  constructor(
    private persistence: PersistenceService,
    private logger: NgxFancyLoggerService
  ) {}

  async ready(): Promise<Realm> {
    try {
      this.realmList = await this.persistence.ready();
      this.currentRealm = await this.persistence.getRealm(
        this.realmList.currentRealm
      );

      if (!this.currentRealm.character) {
        this.currentRealm.character = this.defaultCharacter();
      }

      this.logger.info(
        'Realm setup is done',
        this.realmList,
        this.currentRealm
      );

      return this.currentRealm;
    } catch (error) {
      this.logger.error('Error on Realm setup', error);
      return null;
    }
  }

  defaultCharacter(): SceneElement {
    const position = Vector3.Zero();
    position.y = 1;
    return <SceneElement>{
      name: 'character',
      position: position,
      rotation: Vector3.Zero(),
    };
  }

  getRealmList(): RealmList {
    return this.realmList;
  }

  getCurrentRealm(): Realm {
    return this.currentRealm;
  }

  // TODO: remove this 
  updateRealmBusy = false;

  // TODO: add queue to prevent synchronization issues with udpateCharacter
  async _updateRealm() {
    if( this.updateRealmBusy ){
      return;
    }
    this.updateRealmBusy = true;
    const updated = await this.persistence.updateRealm(this.currentRealm);
    this.currentRealm._rev = updated.rev;
    this.updateRealmBusy = false;
    return this.currentRealm;
  }

  async add(element: SceneElement) {
    this.currentRealm.elements.push(element);
    return this._updateRealm();
  }

  async updateCharacter(character: SceneElement) {
    this.currentRealm.character = character;
    return this._updateRealm();
  }
}
