import WebSocket from 'ws';
import { EventsHandler } from './events.handler';

export class CustomServer {
  constructor(){
    const server = new WebSocket.Server({ port: 8080 });
    console.log('server started at port 8080');

    server.on('connection', function connection(ws:WebSocket) {
      console.log('new connection');
      const handler = new EventsHandler(ws);
      ws.on('message', function incoming(message:WebSocket.Data) {
        handler.onMessage(message);
      });

      ws.on('close', function incoming(message:WebSocket.Data) {
        console.log('connection closed');
        handler.onClose();
      });

    });
  }
}