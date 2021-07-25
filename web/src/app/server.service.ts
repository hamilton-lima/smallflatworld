import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, timer } from "rxjs";
import { environment } from "src/environments/environment";

class Message{
  event: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private socket: WebSocket;

  public readonly ready: Subject<boolean> = new Subject();
  private readonly message: Subject<string> = new Subject();
  private readonly timer = timer(1000, 1000);
  private messages = 0;

  public readonly fps: Subject<number> = new Subject();

  constructor() {}

  connect(server:string) {
    // already connected
    if (this.socket && this.socket.readyState == WebSocket.OPEN) {
      console.log("websocket already connected");
      return new BehaviorSubject(true);
    }

    this.socket = new WebSocket(server);
    this.socket.onopen = () => {
      console.log("websocket connection open");
      this.ready.next(true);
    };

    this.message.subscribe(() => this.messages++);

    this.timer.subscribe(() => {
      this.fps.next(this.messages);
      this.messages = 0;
    });

    return this.ready;
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  share(details: string): Subject<string> {

    const message = <Message>{ event: 'events', data: details};
    const payload = JSON.stringify(message);

    this.socket.send(payload);
    this.socket.onmessage = (event: MessageEvent) => {
      this.message.next(event.data);
    };
    return this.message;
  }
}
