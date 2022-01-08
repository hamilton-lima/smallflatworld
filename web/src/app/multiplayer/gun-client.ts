import { makeStateKey } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Realm, SceneElementMemento } from 'src/app/realm/realm.model';
import { IServerTransport } from './server.service';

// TODO: receive updates when character moves

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
      .put({ name: realm.name });

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

    gunSceneElement.put({
      name: memento.name,
      componentID: memento.componentID,
      imageName: memento.imageName,
      skipColision: memento.skipColision,
    });

    gunSceneElement.get('position').put(memento.position);
    gunSceneElement.get('rotation').put(memento.rotation);
    gunSceneElement.get('scaling').put(memento.scaling);
    gunSceneElement.get('position').put(memento.position);
    gunSceneElement.get('code').put(memento.code);
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
      subject.next({ key: key, data: data, character: name });
      console.log('character position updated', key, data, name);
    });

    return subject;
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
    if (data['_'] && data['_']['#']) {
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
}
