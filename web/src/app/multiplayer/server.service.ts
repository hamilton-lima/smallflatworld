import { Injectable, Type } from '@angular/core';
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

class Message<Type>
{
  action: "add" | "update" | "remove";
  target: string;
  data: Type;
}

export class MessageSender2Server<Type>{
  constructor(private owner: ServerService, private targetName: string) {}

  send(type: string, item: Type) {
    const message = Object.assign(new Message<Type>(), {
      action: type,
      target: this.targetName,
      data: item,
    });
    
    if( this.owner.room){
      console.log("send to server", message);
      this.owner.room.send(message.action, message);
    } else {
      console.warn('Sending message to server before connecting', message);
    }
  }

  add(item: Type) {
    this.send("add", item);
  }

  update(item: Type) {
    this.send("update", item);
  }

  remove(item: Type) {
    this.send("remove", item);
  }
}

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
  public readonly elementsHandler: MessageSender2Server<SceneElementMemento>

  constructor() {
    this.elementsHandler = new MessageSender2Server<SceneElementMemento>(this, "elements");
  }

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

  send(...message: any) {
    // TODO: replace by MessageSender2Server
    //
    // if (this.room) {
    //   console.log('send message to server', action, data);
    //   this.room.send(action, data);
    // } else {
    //   console.error(
    //     'Trying to send message to the server without a room defined',
    //     action,
    //     data
    //   );
    // }
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

  updateElement(element: SceneElementMemento) {
    if (this.room) {
      const found = this.room.state.elements.get(element.name);
      console.log('update room on client side, will it send?', found);
      if (found) {
        found.code.assign(element.code);
        found.position.assign(element.position);
        found.rotation.assign(element.rotation);
        found.scaling.assign(element.scaling);
      } else {
        // const current = new SceneElementMemento();
        // current.name = element.name;
        // current.componentID = element.componentID;
        // current.imageName = element.imageName;
        // current.skipColision = element.skipColision;
        // current.code.assign(element.code);
        // current.position.assign(element.position);
        // current.rotation.assign(element.rotation);
        // current.scaling.assign(element.scaling);
        this.room.state.elements.set(element.name, element);
      }
    }
    // this.send(Actions.UpdateElements, element);
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
