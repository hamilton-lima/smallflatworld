import { Injectable } from '@angular/core';
import { Vector3 } from '@babylonjs/core';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { Realm, SceneElement } from '../persistence/persistence.model';
import { PersistenceService } from '../persistence/persistence.service';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private currentRealm: Realm;
  acceptingUpdates = true;

  constructor(
    private persistence: PersistenceService,
    private logger: NgxFancyLoggerService,
    private configuration: ConfigurationService
  ) {}

  async ready(): Promise<Realm> {
    try {
      await this.persistence.ready();
      const configuration = await this.configuration.getConfiguration();

      // gets current realm
      this.currentRealm = await this.persistence.getRealm(
        configuration.currentRealm
      );

      // checks for character in the current realm
      if (!this.currentRealm.character) {
        this.currentRealm.character = this.defaultCharacter();
        await this.persistence.updateRealm(this.currentRealm);
      }

      this.logger.info('Realm setup is done', this.currentRealm);
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

  getCurrentRealm(): Realm {
    return this.currentRealm;
  }

  async _updateRealm() {
    const updated = await this.persistence.updateRealm(this.currentRealm);
  }

  // add new scene elements
  async add(element: SceneElement) {
    this.currentRealm.elements.push(element);
    return this._updateRealm();
  }

  // update character state
  async updateCharacter(character: SceneElement) {
    this.currentRealm.character = character;
    return this._updateRealm();
  }

  // add new realm and set as current
  async updateRealm(realm: Realm) {
    this.currentRealm = realm;
    await this._updateRealm();
    await this.configuration.setCurrentRealm(realm.id);
  }
}
