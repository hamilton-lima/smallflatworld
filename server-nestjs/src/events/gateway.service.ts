import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'ws';
  
  export class ShareResponse {
      realmKey: string;
  }

  @WebSocketGateway(8080)
  export class GatewayService {
    @WebSocketServer()
    server: Server;

 
    @SubscribeMessage('events')
    handleEvent(
      @MessageBody() data: string,
      @ConnectedSocket() client: Socket,
    ): string {
        console.log('message received', data, JSON.stringify(client));
        return data + '-echo';
    }

  }