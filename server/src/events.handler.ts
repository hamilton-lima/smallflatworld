import WebSocket from 'ws';
import { v4 as uuidv4 } from "uuid";

uuidv4();
export class EventsHandler {
  private client: WebSocket;

  constructor(client: WebSocket) {
    this.client = client;
  }

  onMessage(message:WebSocket.Data){
    console.log('received: %s', message);
    this.client.send(message + '-echo');
  }
}
