import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import {
  Actions,
  ClientMessage,
  JoinRequest,
  JoinResponse,
} from "../src/events.model";
import { MemoryStorage } from "../src/memory.storage";

@suite
export class JoinUnitTests {
  private handler: EventsHandler;
  private socket: WebSocket;
  mockedWebSocket: WebSocket;

  before() {
    this.mockedWebSocket = mock(WebSocket);
    this.socket = instance(this.mockedWebSocket);
    this.handler = new EventsHandler(this.socket);
    MemoryStorage.getInstance().reset();
  }

  @test "should return current state when joining a realm"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: "foo.bar" },
    });
    console.log("join message", JSON.stringify(message));

    // adds fake realm
    MemoryStorage.getInstance().addRealm("foo.bar");

    // join the realm
    this.handler.onMessage(message);

    // a response is sent
    verify(this.mockedWebSocket.send(anything())).called();

    // check the response
    const [response] = capture(this.mockedWebSocket.send).first();
    const joinResponse: JoinResponse = JSON.parse(response);
    console.log("join response", joinResponse);

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
    const joinResponse: JoinResponse = JSON.parse(response);
    console.log("join response", joinResponse);

    // should be ready as the realm exists
    expect(joinResponse.ready).to.be.false;
    expect(joinResponse.data).to.be.null;
  }
}
