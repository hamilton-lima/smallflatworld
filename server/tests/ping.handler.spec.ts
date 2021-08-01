import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import {
  Actions,
  ClientMessage,
  ClientResponse,
  PingResponse,
} from "../src/events.model";

@suite
export class PingHandlerUnitTests {
  private handler: EventsHandler;
  private socket: WebSocket;
  mockedWebSocket: WebSocket;

  before() {
    this.mockedWebSocket = mock(WebSocket);
    this.socket = instance(this.mockedWebSocket);
    this.handler = new EventsHandler(this.socket);
  }

  @test "should respond a ping with a pong"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Ping,
      data: {},
    });
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const [response] = capture(this.mockedWebSocket.send).first();
    console.log("pong response", response);

    const clientResponse: ClientResponse = JSON.parse(response);
    const pong: PingResponse = <PingResponse>clientResponse.data;

    expect(clientResponse.action).to.be.equal("ping");
    expect(pong.data).to.be.equal("pong");
  }
}
