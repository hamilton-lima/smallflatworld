import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import {
  Actions,
  ClientData,
  ClientMessage,
  ClientResponse,
  JoinRequest,
  JoinResponse,
  ShareRequest,
  ShareResponse,
  StateUpdate,
} from '../../../../server/src/events.model';
import { SceneElement } from '../persistence/persistence.model';
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

  update(elements: SceneElement[]) {
    const request = <StateUpdate>{
      data: elements,
    };
    this.send(Actions.Join, request);
  }
}
