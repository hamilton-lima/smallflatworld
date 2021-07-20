import WebSocket from 'ws';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function connection(ws:WebSocket) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message + '-echo');
  });

  ws.send('something');
});
