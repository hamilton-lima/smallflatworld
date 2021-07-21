import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import { assert } from "console";
import { Actions, ClientMessage, PingRequest } from "../src/events.model";

_chai.should();

@suite
export class EventsHandlerUnitTests {
  private handler: EventsHandler;
  private socket: WebSocket;
  mockedWebSocket: WebSocket;

  before() {
    this.mockedWebSocket = mock(WebSocket);
    this.socket = instance(this.mockedWebSocket);
    this.handler = new EventsHandler(this.socket);
  }

  @test "should respond a ping with a pong"() {
    const message = JSON.stringify(<ClientMessage>{ action: Actions.Ping, data: {} });
    console.log('ping message', JSON.stringify(message));
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const response = capture(this.mockedWebSocket.send).first();
    assert(response.toString() == '{ data: "pong"}');
  }
}
