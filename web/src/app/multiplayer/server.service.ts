import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Realm,
  RealmSchema,
  SceneElementMemento,
} from '../../../../colyseus-server/src/room.state';
import { Client, Room } from 'colyseus.js';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private colyseusClient: Client;
  public readonly onShare: Subject<string> = new Subject();
  public readonly onStateUpdate: Subject<Realm> = new Subject();
  room: Room<RealmSchema>;

  constructor() {}

  connect(server: string) {
    console.log('client class', Client);
    this.colyseusClient = new Client(server);
    return true;
  }

  close() {
    if (this.room) {
      this.room.leave();
    } else {
      console.error('Trying to leave room that is not defined');
    }
  }

  async share(realmJSON: string, characterID: string) {
    try {
      this.room = await this.colyseusClient.create('realm', {
        realm: realmJSON,
        characterID: characterID,
      });
      this.listenForUpdates();
      this.onShare.next(this.room.id);
      console.log('joined successfully', this.room);
    } catch (e) {
      console.error('join error', e);
    }
  }

  async join(realmUUID: string, characterID: string) {
    try {
      this.room = await this.colyseusClient.joinById(realmUUID, {
        characterID: characterID,
      });
      this.listenForUpdates();
      console.log('joined successfully', this.room);
    } catch (e) {
      console.error('join error', e);
    }
  }

  listenForUpdates() {
    if (!this.room) {
      console.error('Trying to listen to room updates with no room defined');
    } else {
      this.room.state.characters.onAdd = (
        add: SceneElementMemento,
        key: string
      ) => {
        console.log('add to characters', add, key);
      };

      this.room.state.characters.onChange = (
        update: SceneElementMemento,
        key: string
      ) => {
        console.log('update on characters', update, key);
      };

      this.room.onStateChange.once((state) => {
        console.log(
          'first update with room state, CONVERT DATA TO LOCAL Realm'
        );

        // TODO: convert RealmSchema to Realm
        this.onStateUpdate.next(<Realm>state);
      });
    }
  }
}
