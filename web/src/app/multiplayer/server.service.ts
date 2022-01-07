import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Realm,
  RealmSchema,
  SceneElementMemento,
} from '../../../../colyseus-server/src/room.state';
import Gun from 'gun/gun';
import { GunClient } from './gun-client';
import { chromaticAberrationPixelShader } from '@babylonjs/core/Shaders/chromaticAberration.fragment';
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public readonly onShare: Subject<string> = new Subject();
  public readonly onStateUpdate: Subject<Realm> = new Subject();

  gun: any;
  client: GunClient;

  constructor() {}

  connect(url: string) {
    this.gun = new Gun(url);
    this.client = new GunClient(this.gun);
    return true;
  }

  close() {
    console.error('leave not implemented');
  }

  async share(realm: Realm, characterID: string) {
    try {
      this.client.share(realm, characterID);
      this.client.join(realm.id, characterID);
      // this.listenForUpdates();
      // this.onShare.next(this.room.id);
      console.log('shared and joined successfully');
    } catch (e) {
      console.error('share and join error', e);
    }
  }

  async join(realmUUID: string, characterID: string) {
    try {
      this.client.join(realmUUID, characterID);
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
