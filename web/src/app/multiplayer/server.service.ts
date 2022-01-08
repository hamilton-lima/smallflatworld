import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Realm, SceneElementMemento } from 'src/app/realm/realm.model';
import Gun from 'gun/gun';
import { GunClient } from './gun-client';

export interface IServerTransport {
  share(realm: Realm);
  shareRealm(realm: Realm);
  shareSceneElement(
    mapName: 'characters' | 'elements',
    memento: SceneElementMemento
  );
  join(realmID: string, character: SceneElementMemento);
  getRealmID(): string;
  getMapListener(mapName: string): Subject<any>;
  // getMapListenerWithField(mapName: string, field: string): Subject<any>;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public readonly onShare: Subject<string> = new Subject();
  public readonly onStateUpdate: Subject<Realm> = new Subject();

  gun: any;
  transport: GunClient;

  constructor() {}

  connect(url: string) {
    this.gun = new Gun(url);
    this.transport = new GunClient(this.gun);
    return true;
  }

  getServerTransport(): IServerTransport {
    return this.transport;
  }

  close() {
    console.error('leave not implemented');
  }

  async share(realm: Realm, character: SceneElementMemento) {
    try {
      this.transport.share(realm);
      this.transport.join(realm.id, character);
      // this.listenForUpdates();
      // this.onShare.next(this.room.id);
      console.log('shared and joined successfully');
    } catch (e) {
      console.error('share and join error', e);
    }
  }

  async join(realmUUID: string, character: SceneElementMemento) {
    try {
      this.transport.join(realmUUID, character);
      // this.listenForUpdates();
      // this.onShare.next(this.room.id);
      console.log('joined successfully');
    } catch (e) {
      console.error('join error', e);
    }
  }

  listenForUpdates() {
    // this.room.state.characters.onAdd = (
    //   add: SceneElementMemento,
    //   key: string
    // ) => {
    //   console.log('add to characters', add, key);
    // };
    // this.room.state.characters.onChange = (
    //   update: SceneElementMemento,
    //   key: string
    // ) => {
    //   console.log('update on characters', update, key);
    // };
    // this.room.onStateChange.once((state) => {
    //   console.log('first update with room state, CONVERT DATA TO LOCAL Realm');
    //   // TODO: convert RealmSchema to Realm
    //   this.onStateUpdate.next(<Realm>state);
    // });
  }
}
