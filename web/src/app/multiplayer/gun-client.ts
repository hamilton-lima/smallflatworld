import { Realm, SceneElementMemento } from 'src/app/realm/realm.model';

export class GunClient {
  // TODO: a type would be lovely... ;)
  gun: any;
  constructor(gun: any) {
    this.gun = gun;
  }

  share(realm: Realm, characterID: string) {
    this.shareRealm(realm);

    const character: SceneElementMemento = realm.characters.get(characterID);
    this.shareSceneElement('characters', realm.id, character);

    this.join(realm.id);
  }

  private shareRealm(realm: Realm) {
    const gunRealm = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(realm.id)
      .put({ name: realm.name });

    return gunRealm;
  }

  private shareSceneElement(
    mapName: 'characters' | 'elements',
    realmID: string,
    memento: SceneElementMemento
  ) {
    const gunSceneElement = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(realmID)
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

  join(realmID: string) {
    const gunCharacters = this.gun
      .get('smallflatworld')
      .get('realms')
      .get(realmID)
      .get('characters');

    gunCharacters
      .map()
      .get('position')
      .on((data, key) => {
        const soul = this.getSoul(data);
        const character = this.extractCharacterName(soul);
        console.log('character position updated', key, data, character);
      });
  }

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
