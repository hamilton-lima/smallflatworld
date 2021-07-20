import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import { assert } from "console";

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

  @test "should send message back with -echo suffix"() {
    this.handler.onMessage("foo");
    verify(this.mockedWebSocket.send(anything())).called();

    const response = capture(this.mockedWebSocket.send).first();
    assert(response.toString() == "foo-echo", "should have -echo suffix");
  }
}
