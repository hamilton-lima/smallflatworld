import { Injectable } from '@angular/core';
import { Realm } from '../persistence/persistence.model';
import { PersistenceService } from '../persistence/persistence.service';
import { ConfigurationService } from '../configuration.service';
import { ClientService } from '../multiplayer/client.service';
import {
  SceneElementMemento,
  Vector3MementoOne,
  Vector3MementoZero,
} from '../../../../server/src/events.model';
import { RunnerService } from '../coding/runner.service';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private currentRealm: Realm;
  acceptingUpdates = true;

  constructor(
    private persistence: PersistenceService,
    private configuration: ConfigurationService,
    private client: ClientService,
    private runner: RunnerService
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
    return <SceneElementMemento>{
      name: 'character',
      position: Vector3MementoZero,
      rotation: Vector3MementoZero,
      scaling: Vector3MementoOne,
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

  // update scene elements
  async get(name: string) {
    const found = this.currentRealm.elements.findIndex(
      (element) => element.name == name
    );
    if (found) {
      return this.currentRealm.elements[found];
    }
    return null;
  }

  // update scene elements
  async update(input: SceneElementMemento) {
    const found = this.currentRealm.elements.findIndex(
      (element) => element.name == input.name
    );
    if (found) {
      this.currentRealm.elements[found] = input;
    }
    return this._updateRealm();
  }

  delete(name: string) {
    const found = this.currentRealm.elements.findIndex(
      (element) => element.name == name
    );
    if (found) {
      this.currentRealm.elements.splice(found, 1);
      this.runner.delete(name);
    }
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

  async createRealm() {
    const realm = this.persistence.buildRealm();
    realm.character = this.defaultCharacter();
    console.log('create realm', realm);
    await this.updateRealm(realm);
  }
}
