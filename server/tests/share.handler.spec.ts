import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import {
  Actions,
  ClientMessage,
  ShareResponse,
  StateUpdate,
} from "../src/events.model";

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

  @test "should create realm in storage when calling SHARE"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Share,
      data: {},
    });
    console.log("share message", JSON.stringify(message));
    this.handler.onMessage(message);
    verify(this.mockedWebSocket.send(anything())).called();

    const [response] = capture(this.mockedWebSocket.send).first();
    const joinResponse: ShareResponse = JSON.parse(response);

    const state: StateUpdate =
      this.handler.handlers.share.storage.getRealmState(joinResponse.uuid);
    console.log("realmData", JSON.stringify(state));
    expect(state.data).to.be.an.instanceof(Array);
    expect(this.handler.getRealmID()).to.be.equal(joinResponse.uuid);
  }
}
