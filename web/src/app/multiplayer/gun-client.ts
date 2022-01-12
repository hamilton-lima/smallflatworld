import { Subject } from 'rxjs';
import {
  CodeDefinition,
  Realm,
  SceneElementMemento,
  Vector3Memento,
} from 'src/app/realm/realm.model';
import { IServerTransport } from './server.service';

// TODO: receive updates when character moves
export class GunMessageUpdate {
  key: string;
  data: any;
  soul: string;
}

export class GunClient implements IServerTransport {
  gun: any;
  realmID: string;
  constructor(gun: any) {
    this.gun = gun;
  }

  getRealmID(): string {
    return this.realmID;
  }

  share(realm: Realm) {
    this.shareRealm(realm);
  }

  shareRealm(realm: Realm) {
    const gunRealm = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(realm.id)
      .put({ name: realm.name || 'empty-realm-name' });

    this.realmID = realm.id;
    return gunRealm;
  }

  shareSceneElement(
    mapName: 'characters' | 'elements',
    memento: SceneElementMemento
  ) {
    if (!this.realmID) {
      console.warn('sending updates without sharing realm');
      return;
    }

    const gunSceneElement = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(this.realmID)
      .get(mapName)
      .get(memento.name);

    const fields = {
      name: memento.name,
      componentID: memento.componentID || '',
      imageName: memento.imageName || '',
      skipColision: memento.skipColision || false,
    };

    console.log('fields', fields);
    gunSceneElement.put(fields);

    gunSceneElement
      .get('position')
      .put(memento.position || new Vector3Memento());
    gunSceneElement
      .get('rotation')
      .put(memento.rotation || new Vector3Memento());
    gunSceneElement.get('scaling').put(memento.scaling || new Vector3Memento());
    gunSceneElement
      .get('position')
      .put(memento.position || new Vector3Memento());
    gunSceneElement.get('code').put(memento.code || new CodeDefinition());
  }

  removeSceneElement(mapName: 'characters' | 'elements', memento: SceneElementMemento) {
    const gunSceneElement = this.gun
    .get('smallflatworld')
    .get('realms')
    .get(this.realmID)
    .get(mapName)
    .get(memento.name);

    gunSceneElement.put( null );
  }


  fixBoolean(value: boolean, fallback: boolean) {
    if (typeof value === undefined) {
      return fallback;
    } else {
      return value;
    }
  }

  fixString(value: string, fallback: string) {
    if (typeof value === undefined) {
      return fallback;
    } else {
      return value;
    }
  }

  join(realmID: string, character: SceneElementMemento) {
    const gunCharacters = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(realmID)
      .get('characters');

    this.realmID = realmID;
    this.shareSceneElement('characters', character);
  }

  getMapListener(mapName: string): Subject<any> {
    if (!this.realmID) {
      return null;
    }

    const subject = new Subject();
    const updatableElement = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(this.realmID)
      .get(mapName);

    updatableElement.map().on((data, key) => {
      const soul = this.getSoul(data);
      const name = this.extractCharacterName(soul);
      subject.next(<GunMessageUpdate>{ key: key, data: data, soul: name });
    });

    return subject;
  }

  getRealm(): Subject<Realm> {
    if (!this.realmID) {
      return null;
    }

    const realm = new Realm();
    const subject = new Subject<Realm>();
    const gunRealm = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(this.realmID);

    const promises = [];
    promises.push(this.getRealmFields(gunRealm, realm));
    // call similar to getMap for each field.

    Promise.all(promises).then((_) => {
      subject.next(realm);
    });

    return subject;
  }

  getRealmFields(gunRealm: any, realm: Realm) {
    return new Promise<void>((resolve) => {
      gunRealm.map().once((data, key) => {
        realm.name = data.name;
        resolve();
      });
    });
  }

  getCharacters(gunRealm: any, realm: Realm) {
    return new Promise<void>((resolve) => {
      gunRealm
        .get('characters')
        .map()
        .once((data, key) => {
          realm.name = data.name;
          resolve();
        });
    });
  }

  // getMapListenerWithField(mapName: string, field: string): Subject<any> {
  //   if (!this.realmID) {
  //     return null;
  //   }

  //   const subject = new Subject();
  //   const updatableElement = this.gun
  //     .get('smallflatworld')
  //     .get('realms')
  //     .get(this.realmID)
  //     .get(mapName);

  //   updatableElement
  //     .map()
  //     .get(field)
  //     .on((data, key) => {
  //       const soul = this.getSoul(data);
  //       const name = this.extractCharacterName(soul);
  //       subject.next({ key: key, data: data, character: name });
  //       console.log('character position updated', key, data, name);
  //     });

  //   return subject;
  // }

  getSoul(data) {
    if ( data && data['_'] && data['_']['#']) {
      return data['_']['#'];
    } else {
      console.error('This data has no SOUL! :)', data);
      return '';
    }
  }

  extractCharacterName(path) {
    if (path) {
      const array = path.split('/');
      if (array.length >= 2) {
        return array[array.length - 2];
      }
    } else {
      return undefined;
    }
  }

  async getVector3Memento(soul: string): Promise<Vector3Memento> {
    return this.getToInstance(soul, new Vector3Memento());
  }

  async getCode(soul: string): Promise<CodeDefinition> {
    return this.getToInstance(soul, new CodeDefinition());
  }

  async getToInstance(soul: string, instance: any): Promise<any> {
    const remoteData = await this.get(soul);
    Object.assign(instance, remoteData);
    return instance;
  }

  get(soul: string): Promise<any> {
    return new Promise<any>((resolve) => {
      this.gun.get(soul).once((data, key) => {
        console.log('key,data', key, data);
        resolve(data);
      });
    });
  }
}
