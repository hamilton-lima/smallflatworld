import WebSocket from 'ws';
import { EventsHandler } from './events.handler';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function connection(ws:WebSocket) {
  const handler = new EventsHandler(ws);

  ws.on('message', function incoming(message:WebSocket.Data) {
    handler.onMessage(message);
  });

});
