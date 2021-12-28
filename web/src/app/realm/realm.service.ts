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
  Vector3MementoOne,
  Vector3MementoZero,
} from '../../../../server/src/events.model';
import { ConfigurationService } from '../shared/configuration.service';
import { Subject } from 'rxjs';
import { EventsBrokerService } from '../shared/events-broker.service';
import { Configuration } from '../persistence/persistence.model';

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
  ) {}

  async ready(): Promise<Realm> {
    try {
      await this.persistence.ready();
      this.configuration = await this.configurationService.getConfiguration();
      console.log('ready(1)', this.configuration);

      // gets current realm
      this.currentRealm = await this.persistence.getRealm(
        this.configuration.currentRealm
      );

      // checks for character in the current realm
      const found = this.currentRealm.characters.find(
        (character: SceneElementMemento) => {
          console.log('ready(1.1) each character', character.name);
          return character.name == this.configuration.characterID;
        }
      );
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
    realm.characters.push(character);
    return realm;
  }

  defaultCharacter(name: string): SceneElementMemento {
    return <SceneElementMemento>{
      name: name,
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
    const found = this.currentRealm.elements.findIndex((element) => {
      return element.name == name;
    });
    if (found > -1) {
      return this.currentRealm.elements[found];
    }
    return null;
  }

  // update scene elements
  async update(input: SceneElementMemento) {
    const found = this.currentRealm.elements.findIndex(
      (element) => element.name == input.name
    );
    if (found > -1) {
      this.currentRealm.elements[found] = input;
    }
    return this._updateRealm();
  }

  delete(name: string) {
    const found = this.currentRealm.elements.findIndex(
      (element) => element.name == name
    );
    if (found > -1) {
      const element = this.currentRealm.elements[found];
      this.currentRealm.elements.splice(found, 1);
      this.broker.onDeleteSceneElement.next(element);
    }
    return this._updateRealm();
  }

  // update character state
  async updateCharacter(character: SceneElementMemento) {
    const found = this.currentRealm.characters.findIndex(
      (character: SceneElementMemento) =>
        character.name == this.configuration.characterID
    );

    if (found > -1) {
      this.currentRealm.characters[found].position = character.position;
      this.currentRealm.characters[found].rotation = character.rotation;
      this.currentRealm.characters[found].scaling = character.scaling;
      this.broker.onUpdateCharacter.next(character);
      return this._updateRealm();
    }

    console.error(
      'Current character not found in the realm, something really wrong is going on',
      this.configuration.characterID
    );
  }

  getCharacter(): SceneElementMemento {
    const found = this.currentRealm.characters.find(
      (character: SceneElementMemento) => {
        return character.name == this.configuration.characterID;
      }
    );

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
    this.currentRealm.images.push(image);
    return this._updateRealm();
  }

  async addDesign3D(design3D: SceneDesign3D) {
    this.currentRealm.designs3D.push(design3D);
    return this._updateRealm();
  }

  addAudio(audio: SceneAudio) {
    this.currentRealm.audios.push(audio);
    return this._updateRealm();
  }

  addCode(code: SceneCode) {
    this.currentRealm.codes.push(code);
    return this._updateRealm();
  }

  // update scene elements
  async getImage(name: string) {
    const found = this.currentRealm.images.findIndex(
      (image) => image.name == name
    );
    if (found > -1) {
      return this.currentRealm.images[found];
    }
    return null;
  }

  async updateCode(input: SceneCode) {
    const found = this.currentRealm.codes.findIndex(
      (code) => code.name == input.name
    );
    if (found > -1) {
      this.currentRealm.codes[found] = input;
    }
    return this._updateRealm();
  }

  async getCode(name: string) {
    const found = this.currentRealm.codes.findIndex((code) => {
      return code.name == name;
    });
    if (found > -1) {
      return this.currentRealm.codes[found];
    }
    return null;
  }

  deleteImage(name: string) {
    const found = this.currentRealm.images.findIndex(
      (image) => image.name == name
    );
    console.log('found', name);
    if (found > -1) {
      this.currentRealm.images.splice(found, 1);
    }
    return this._updateRealm();
  }

  deleteDesign3D(name: string) {
    const found = this.currentRealm.designs3D.findIndex(
      (image) => image.name == name
    );
    console.log('found', name);
    if (found > -1) {
      this.currentRealm.designs3D.splice(found, 1);
    }
    return this._updateRealm();
  }

  deleteAudio(name: string) {
    const found = this.currentRealm.audios.findIndex(
      (audio) => audio.name == name
    );
    console.log('found', name, found);
    if (found > -1) {
      this.currentRealm.audios.splice(found, 1);
    }

    return this._updateRealm();
  }

  deleteCode(name: string) {
    const found = this.currentRealm.codes.findIndex(
      (code) => code.name == name
    );
    console.log('found', name, found);
    if (found > -1) {
      this.currentRealm.codes.splice(found, 1);
    }

    return this._updateRealm();
  }
}
