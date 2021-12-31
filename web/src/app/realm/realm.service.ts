import { Injectable } from '@angular/core';
import { PersistenceService } from '../persistence/persistence.service';
import { ClientService } from '../multiplayer/client.service';
import {
  Realm,
  SceneAudio,
  SceneCode,
  SceneDesign3D,
  SceneElementMemento,
  SceneImage,
  Vector3Memento,
} from '../../../../colyseus-server/src/room.state';
import { ConfigurationService } from '../shared/configuration.service';
import { Subject } from 'rxjs';
import { EventsBrokerService } from '../shared/events-broker.service';
import { Configuration } from '../persistence/persistence.model';

const Vector3MementoOne = function () {
  const result = new Vector3Memento();
  Object.assign(result, { x: 1, y: 1, z: 1 });
  return result;
}

const Vector3MementoZero = function () {
  const result = new Vector3Memento();
  Object.assign(result, { x: 0, y: 0, z: 0 });
  return result;
}

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private currentRealm: Realm;
  private configuration: Configuration;

  acceptingUpdates = true;
  onNew: Subject<Realm> = new Subject();

  constructor(
    private persistence: PersistenceService,
    private configurationService: ConfigurationService,
    private client: ClientService,
    private broker: EventsBrokerService
  ) {

    this.client.afterJoin.subscribe((realm: Realm) => {
      console.log('after join, update realm state', realm);
      this.addRealmAndSetCurrent(realm);
    });
  }

  async ready(): Promise<Realm> {
    try {
      await this.persistence.ready();
      this.configuration = await this.configurationService.getConfiguration();
      console.log('ready(1)', this.configuration);

      // gets current realm
      this.currentRealm = await this.persistence.getRealm(
        this.configuration.currentRealm
      );

      console.log('current realm', this.currentRealm);
      // checks for character in the current realm
      const found = this.currentRealm.characters.get(this.configuration.characterID);
      console.log('ready(2) character', found);

      if (!found) {
        this.addDefaultCharacter2Realm(this.currentRealm);
        console.log('ready(3) after add', this.currentRealm);
        await this.persistence.updateRealm(this.currentRealm);
      }

      console.info('Realm setup is done', this.currentRealm);
      this.onNew.next(this.currentRealm);

      return this.currentRealm;
    } catch (error) {
      console.error('Error on Realm setup', error);
      return null;
    }
  }

  addDefaultCharacter2Realm(realm: Realm): Realm {
    const character = this.defaultCharacter(this.configuration.characterID);
    realm.characters.set(this.configuration.characterID, character);
    return realm;
  }

  defaultCharacter(name: string): SceneElementMemento {
    return <SceneElementMemento>{
      name: name,
      position: Vector3MementoZero(),
      rotation: Vector3MementoZero(),
      scaling: Vector3MementoOne(),
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
    this.currentRealm.elements.set(element.name, element);
    return this._updateRealm();
  }

  // get scene elements
  get(name: string) {
    return this.currentRealm.elements.get(name);
  }

  // update scene elements
  async update(input: SceneElementMemento) {
    const found = this.get(input.name);
    if (found) {
      Object.assign(found, input);
    }
    return this._updateRealm();
  }

  delete(name: string) {
    const found = this.get(name);
    if (found) {
      this.currentRealm.elements.delete(name);
      this.broker.onDeleteSceneElement.next(found);
    }
    return this._updateRealm();
  }

  // update character state
  async updateCharacter(character: SceneElementMemento) {
    const found = this.getCharacter();
    console.log('character found', found);

    if (found) {
      Object.assign(found, character);
      // this.currentRealm.characters[found].position = character.position;
      // this.currentRealm.characters[found].rotation = character.rotation;
      // this.currentRealm.characters[found].scaling = character.scaling;
      this.broker.onUpdateCharacter.next(character);
      return this._updateRealm();
    }

    console.error(
      'Current character not found in the realm, something really wrong is going on',
      this.configuration.characterID
    );
  }

  getCharacter(): SceneElementMemento {
    const found = this.currentRealm.characters.get(this.configuration.characterID);

    if (found) {
      return found;
    }

    console.error(
      'Current character not found in the realm, something really wrong is going on',
      this.configuration.characterID
    );

    return null;
  }
  // add new realm and set as current
  async addRealmAndSetCurrent(realm: Realm) {
    this.currentRealm = realm;
    await this._updateRealm();
    await this.configurationService.setCurrentRealm(realm.id);
    this.onNew.next(realm);
  }

  async createRealm() {
    const realm = this.persistence.buildRealm();
    this.addDefaultCharacter2Realm(realm);
    console.log('create realm', realm);
    await this.addRealmAndSetCurrent(realm);
  }

  async addImage(image: SceneImage) {
    this.currentRealm.images.set(image.name, image);
    return this._updateRealm();
  }

  async addDesign3D(design3D: SceneDesign3D) {
    this.currentRealm.designs3D.set(design3D.name, design3D);
    return this._updateRealm();
  }

  addAudio(audio: SceneAudio) {
    this.currentRealm.audios.set(audio.name, audio);
    return this._updateRealm();
  }

  addCode(code: SceneCode) {
    this.currentRealm.codes.set(code.name, code);
    return this._updateRealm();
  }

  async getImage(name: string) {
    return this.currentRealm.images.get(name);
  }

  async updateCode(input: SceneCode) {
    const found = this.currentRealm.codes.get(input.name);
    if (found) {
      Object.assign(found, input);
    }
    return this._updateRealm();
  }

  async getCode(name: string) {
    return this.currentRealm.codes.get(name);
  }

  deleteImage(name: string) {
    const found = this.getImage(name);
    if (found) {
      this.currentRealm.images.delete(name);
    }
    return this._updateRealm();
  }

  deleteDesign3D(name: string) {
    const found = this.currentRealm.designs3D.get(name);
    if (found) {
      this.currentRealm.designs3D.delete(name);
    }
    return this._updateRealm();
  }

  deleteAudio(name: string) {
    const found = this.currentRealm.audios.get(name);
    if (found) {
      this.currentRealm.audios.delete(name);
    }

    return this._updateRealm();
  }

  deleteCode(name: string) {
    const found = this.currentRealm.codes.get(name);
    if (found) {
      this.currentRealm.codes.delete(name);
    }

    return this._updateRealm();
  }
}
