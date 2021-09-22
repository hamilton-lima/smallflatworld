import { Injectable } from '@angular/core';
import { Realm } from '../persistence/persistence.model';
import { PersistenceService } from '../persistence/persistence.service';
import { ConfigurationService } from '../configuration.service';
import { ClientService } from '../multiplayer/client.service';
import { SceneElementMemento, Vector3Memento, Vector3MementoZero } from '../../../../server/src/events.model';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private currentRealm: Realm;
  acceptingUpdates = true;

  constructor(
    private persistence: PersistenceService,
    private configuration: ConfigurationService,
    private client: ClientService
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

      console.info('Realm setup is done', this.currentRealm);
      return this.currentRealm;
    } catch (error) {
      console.error('Error on Realm setup', error);
      return null;
    }
  }

  defaultCharacter(): SceneElementMemento {
    const position = <Vector3Memento>{
      x: 0,
      y: 1,
      z: 0,
    };

    return <SceneElementMemento>{
      name: 'character',
      position: position,
      rotation: Vector3MementoZero,
    };
  }

  getCurrentRealm(): Realm {
    return this.currentRealm;
  }

  async _updateRealm() {
    return await this.persistence.updateRealm(this.currentRealm);
  }

  // add new scene elements
  async add(element: SceneElementMemento) {
    this.currentRealm.elements.push(element);
    return this._updateRealm();
  }

  // update character state
  async updateCharacter(character: SceneElementMemento) {
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
