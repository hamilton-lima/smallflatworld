import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  Actions,
  ClientMessage,
  ClientResponse,
  ShareRequest,
} from '../../../../server/src/events.model';
import { FPSService } from './fps.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private socket: WebSocket;

  public readonly ready: Subject<boolean> = new Subject();
  private readonly message: Subject<ClientResponse> = new Subject();

  constructor(fps: FPSService) {
    fps.setup(this.message);
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

  share() {
    const shareRequest = <ShareRequest>{};
    const message = <ClientMessage>{
      action: Actions.Share,
      data: shareRequest,
    };
    const payload = JSON.stringify(message);

    this.socket.send(payload);
  }
}
