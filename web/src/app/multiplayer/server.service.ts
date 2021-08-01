import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  Actions,
  ClientMessage,
  ShareRequest,
} from '../../../../server/src/events.model';
import { FPSService } from './fps.service';

class Message {
  event: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private socket: WebSocket;

  public readonly ready: Subject<boolean> = new Subject();
  private readonly message: Subject<string> = new Subject();

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
      this.message.next(event.data);
    };

    return this.ready;
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  share(details: string): Subject<string> {
    const shareRequest = <ShareRequest>{};
    const message = <ClientMessage>{
      action: Actions.Share,
      data: shareRequest,
    };
    const payload = JSON.stringify(message);

    this.socket.send(payload);
    return this.message;
  }
}
