import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import { assert } from "console";
import {
  Actions,
  ClientMessage,
  PingRequest,
  ShareResponse,
} from "../src/events.model";
import { RealmData } from "../src/memory.storage";

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
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Ping,
      data: {},
    });
    console.log("ping message", JSON.stringify(message));
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const response = capture(this.mockedWebSocket.send).first();
    assert(response.toString() == '{ data: "pong"}');
  }

  @test "should create realm in storage when calling SHARE"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Share,
      data: {},
    });
    console.log("share message", JSON.stringify(message));
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const response = capture(this.mockedWebSocket.send).first();
    const joinResponse: ShareResponse = JSON.parse(response.toString());
    const realmData: RealmData = this.handler.handlers.share.storage.getRealmState(
      joinResponse.uuid
    );
    console.log('realmData', JSON.stringify(realmData));
    assert(realmData);
  }
}
