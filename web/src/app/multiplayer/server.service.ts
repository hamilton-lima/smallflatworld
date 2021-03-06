import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  Actions,
  ClientData,
  ClientMessage,
  ClientResponse,
  DeleteRequest,
  JoinRequest,
  JoinResponse,
  SceneAudio,
  SceneCode,
  SceneDesign3D,
  SceneElementMemento,
  SceneImage,
  ShareRequest,
  ShareResponse,
  StateUpdate,
} from '../../../../server/src/events.model';
import { FPSService } from './fps.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private socket: WebSocket;

  public readonly ready: Subject<boolean> = new Subject();
  private readonly message: Subject<ClientResponse> = new Subject();

  public readonly onShare: Subject<ShareResponse> = new Subject();
  public readonly onStateUpdate: Subject<StateUpdate> = new Subject();
  public readonly onDelete: Subject<DeleteRequest> = new Subject();
  public readonly onJoin: Subject<JoinResponse> = new Subject();

  constructor(fps: FPSService) {
    fps.setup(this.message);
    this.messageBroker(this.message);
  }

  messageBroker(message: Subject<ClientResponse>) {
    message.subscribe((message: ClientResponse) => {
      try {
        if (message.action == Actions.Update) {
          this.onStateUpdate.next(<StateUpdate>message.data);
          return;
        }

        if (message.action == Actions.Delete) {
          this.onDelete.next(<DeleteRequest>message.data);
          return;
        }

        if (message.action == Actions.Join) {
          this.onJoin.next(<JoinResponse>message.data);
          return;
        }

        if (message.action == Actions.Share) {
          this.onShare.next(<ShareResponse>message.data);
          return;
        }
      } catch (error) {
        console.error('Error redirecting messages from server', error);
      }
    });
  }

  connect(server: string) {
    // already connected
    if (this.socket && this.socket.readyState == WebSocket.OPEN) {
      console.log('websocket already connected');
      return new BehaviorSubject(true);
    }

    this.socket = new WebSocket(server);
    this.socket.onopen = () => {
      console.log('websocket connection open');
      this.ready.next(true);
    };

    this.socket.onerror = (error) => {
      console.log('error connecting');
      this.ready.error(error);
    };

    this.socket.onmessage = (event: MessageEvent) => {
      try {
        const response = <ClientResponse>JSON.parse(event.data);
        this.message.next(response);
      } catch (error) {
        console.error('Error parsing socket message', error, event.data);
      }
    };

    return this.ready;
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  send(action: Actions, data: ClientData) {
    // skip sending messages if not connected
    const connected = this.socket && this.socket.readyState == WebSocket.OPEN;
    if (!connected) {
      return;
    }

    const message = <ClientMessage>{
      action: action,
      data: data,
    };
    const payload = JSON.stringify(message);
    this.socket.send(payload);
  }

  share() {
    const request = <ShareRequest>{};
    this.send(Actions.Share, request);
  }

  join(realmUUID: string) {
    const request = <JoinRequest>{
      uuid: realmUUID,
    };
    this.send(Actions.Join, request);
  }

  update(elements: SceneElementMemento[]) {
    const request = <StateUpdate>{
      data: elements,
    };
    this.send(Actions.Update, request);
  }

  updateImages(images: SceneImage[]) {
    const request = <StateUpdate>{
      images: images,
    };
    this.send(Actions.Update, request);
  }

  updateAudios(audios: SceneAudio[]) {
    const request = <StateUpdate>{
      audios: audios,
    };
    this.send(Actions.Update, request);
  }

  updateCodes(codes: SceneCode[]) {
    const request = <StateUpdate>{
      codes: codes,
    };
    this.send(Actions.Update, request);
  }
  
  updateDesigns3D(designs3D: SceneDesign3D[]) {
    const request = <StateUpdate>{
      designs3D: designs3D,
    };
    this.send(Actions.Update, request);
  }

  delete(name: string) {
    const request = <DeleteRequest>{
      name: name,
    };
    this.send(Actions.Delete, request);
  }

  deleteImage(name: string) {
    console.error('DELETE IMAGE AT SERVER is not implemented.');
  }

  deleteAudio(name: string) {
    console.error('DELETE AUDIO AT SERVER is not implemented.');
  }

  deleteCode(name: string) {
    console.error('DELETE CODE AT SERVER is not implemented.');
  }

  deleteDesign3D(name: string) {
    console.error('DELETE CODE AT SERVER is not implemented.');
  }

}
