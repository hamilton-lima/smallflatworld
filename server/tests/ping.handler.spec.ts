import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import { Actions, ClientMessage, PingResponse } from "../src/events.model";

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
    console.log("ping message", JSON.stringify(message));
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const [response] = capture(this.mockedWebSocket.send).first();
    console.log('pong', JSON.stringify(response));
    const pong: PingResponse = JSON.parse(response);
    expect(pong.data).to.be.equal("pong");
  }
}
