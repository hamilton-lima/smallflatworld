import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import { assert } from "console";
import {
  Actions,
  ClientMessage,
  JoinRequest,
  JoinResponse,
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
    const realmData: StateUpdate =
      this.handler.handlers.share.storage.getRealmState(joinResponse.uuid);
    console.log("realmData", JSON.stringify(realmData));
    assert(realmData);
  }

  @test "should return current state when joining a realm"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: "foo.bar" },
    });
    console.log("join message", JSON.stringify(message));

    // adds fake realm
    this.handler.memoryStorage.addRealm("foo.bar");

    // join the realm
    this.handler.onMessage(message);

    // a response is sent
    verify(this.mockedWebSocket.send(anything())).called();

    // check the response
    const [response] = capture(this.mockedWebSocket.send).first();
    console.log("response", response);
    const joinResponse: JoinResponse = response;

    // should be ready as the realm exists
    expect(joinResponse.ready).to.be.true;
    expect(joinResponse.data.data).to.be.an.instanceof(Array);
  }

  @test
  "should NOT return current state when joining a realm that DONT exist"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: "foo.bar" },
    });
    console.log("join message", JSON.stringify(message));

    // join the realm
    this.handler.onMessage(message);

    // a response is sent
    verify(this.mockedWebSocket.send(anything())).called();

    // check the response
    const [response] = capture(this.mockedWebSocket.send).first();
    const joinResponse: JoinResponse = response;
    console.log("join response", JSON.stringify(joinResponse));

    // should be ready as the realm exists
    expect(joinResponse.ready).to.be.false;
    expect(joinResponse.data).to.be.null;
  }
}
