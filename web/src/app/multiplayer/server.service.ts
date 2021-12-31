import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  Actions,
  Realm,
  RealmSchema,
  SceneAudio,
  SceneCode,
  SceneDesign3D,
  SceneElementMemento,
  SceneImage,
} from '../../../../colyseus-server/src/room.state';
import { Client, Room } from 'colyseus.js';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private colyseusClient: Client;

  // private readonly message: Subject<ClientResponse> = new Subject();

  public readonly onShare: Subject<string> = new Subject();
  public readonly onStateUpdate: Subject<Realm> = new Subject();
  public readonly onElementsAdd: Subject<SceneElementMemento> = new Subject();
  // public readonly onDelete: Subject<DeleteRequest> = new Subject();
  // public readonly onJoin: Subject<JoinResponse> = new Subject();
  room: Room<RealmSchema>;

  constructor() { }

  // messageBroker(message: Subject<ClientResponse>) {
  //   message.subscribe((message: ClientResponse) => {
  //     try {
  //       if (message.action == Actions.Update) {
  //         this.onStateUpdate.next(<Realm>message.data);
  //         return;
  //       }

  //       if (message.action == Actions.Delete) {
  //         this.onDelete.next(<DeleteRequest>message.data);
  //         return;
  //       }

  //       if (message.action == Actions.Join) {
  //         this.onJoin.next(<JoinResponse>message.data);
  //         return;
  //       }

  //       // if (message.action == Actions.Share) {
  //       //   this.onShare.next(<ShareResponse>message.data);
  //       //   return;
  //       // }
  //     } catch (error) {
  //       console.error('Error redirecting messages from server', error);
  //     }
  //   });
  // }

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

  send(
    action: Actions,
    data:
      | string
      | SceneAudio[]
      | SceneCode[]
      | SceneDesign3D[]
      | SceneElementMemento[]
      | SceneImage[]
  ) {
    if (this.room) {
      console.log('send message to server', action, data);
      this.room.send(action, data);
    } else {
      console.error(
        'Trying to send message to the server without a room defined',
        action,
        data
      );
    }
  }

  async share() {
    try {
      this.room = await this.colyseusClient.create('realm', {
        /* options */
      });
      this.listenForUpdates();
      this.onShare.next(this.room.id);
      console.log('joined successfully', this.room);
    } catch (e) {
      console.error('join error', e);
    }
  }

  async join(realmUUID: string) {
    try {
      this.room = await this.colyseusClient.joinById(realmUUID, {
        /* options */
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
      this.room.state.elements.onAdd = (item: SceneElementMemento, key: string) => {
        this.onElementsAdd.next(item);
      };

      this.room.onStateChange.once((state) => {
        console.log('state change', state.elements);
        // TODO: convert RealmSchema to Realm
        this.onStateUpdate.next(<Realm>state);
      });
    }
  }

  updateElements(elements: SceneElementMemento[]) {
    this.send(Actions.UpdateElements, elements);
  }

  updateImages(images: SceneImage[]) {
    this.send(Actions.UpdateImages, images);
  }

  updateAudios(audios: SceneAudio[]) {
    this.send(Actions.UpdateAudios, audios);
  }

  updateCodes(codes: SceneCode[]) {
    this.send(Actions.UpdateCodes, codes);
  }

  updateDesigns3D(designs3D: SceneDesign3D[]) {
    this.send(Actions.UpdateDesigns3D, designs3D);
  }

  deleteElement(name: string) {
    this.send(Actions.DeleteElement, name);
  }

  deleteImage(name: string) {
    this.send(Actions.DeleteImage, name);
  }

  deleteAudio(name: string) {
    this.send(Actions.DeleteAudio, name);
  }

  deleteCode(name: string) {
    this.send(Actions.DeleteCode, name);
  }

  deleteDesign3D(name: string) {
    this.send(Actions.DeleteDesign3D, name);
  }
}
