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
    expect(this.handler.getRealmID()).to.be.equal("foo.bar");
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
    expect(this.handler.getRealmID()).to.be.undefined;
  }

  @test "should remove participant from other realms when joining a second"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: "foo.bar" },
    });
    console.log("join message", JSON.stringify(message));

    // adds fake realm
    MemoryStorage.getInstance().addRealm("foo.bar");
    MemoryStorage.getInstance().addRealm("second");

    // join the realm
    this.handler.onMessage(message);

    // check the response
    const [response] = capture(this.mockedWebSocket.send).first();
    const joinResponse: JoinResponse = JSON.parse(response);
    console.log("join response", joinResponse);

    const firstRealmStorage1 = MemoryStorage.getInstance().getStorage("foo.bar");
    const participants1 = Array.from(firstRealmStorage1.participants.map.keys());
    console.log("current participants", participants1);

    // first time we have the participant ID 
    expect(participants1).to.have.members([this.handler.getID()]);

    // join the second realm
    const message2 = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: "second" },
    });
    console.log("join message 2", JSON.stringify(message2));

    this.handler.onMessage(message2);
    expect(this.handler.getRealmID()).to.be.equal("second");

    const firstRealmStorage2 = MemoryStorage.getInstance().getStorage("foo.bar");
    const participants2 = Array.from(firstRealmStorage2.participants.map.keys());
    console.log("current participants", participants2);

    // list of participants from the previous realm should be empty
    expect(participants2).to.be.empty;

    const secondRealmStorage = MemoryStorage.getInstance().getStorage("second");
    const participantsSecond = Array.from(secondRealmStorage.participants.map.keys());
    console.log("current participants of second realm", participantsSecond);

    expect(participantsSecond).to.have.members([this.handler.getID()]);

  }
}
