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
import { Storage } from "../src/memory.storage";

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
    // check if handler received the realmID
    expect(this.handler.getRealmID()).to.be.equal(joinResponse.uuid);
  }

  getParticipantIDsAsArray(realm: string, storage: Storage) {
    const participants = storage.getStorage(realm).participants;
    const keys = Array.from(participants.map.keys());
    console.log("current participants", keys);
    return keys;
  }

  @test "should be removed from other realms after sharing second time"() {
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Share,
      data: {},
    });
    console.log("share message", JSON.stringify(message));
    this.handler.onMessage(message);
  
    const [response] = capture(this.mockedWebSocket.send).first();
    const joinResponse: ShareResponse = JSON.parse(response);
    console.log("--- share response 1", joinResponse);

    const state: StateUpdate =
      this.handler.handlers.share.storage.getRealmState(joinResponse.uuid);
    console.log("after first share", JSON.stringify(state));
    expect(state.data).to.be.an.instanceof(Array);

    // share second time 
    this.handler.onMessage(message);
  
    const [response2] = capture(this.mockedWebSocket.send).last();
    const joinResponse2: ShareResponse = JSON.parse(response2);
    console.log("--- share response 2", joinResponse2);

    const stateAfterSecond: Storage =
      this.handler.handlers.share.storage.getStorage(joinResponse.uuid);

    console.log("after second share", JSON.stringify(stateAfterSecond));
    const participants = Array.from(stateAfterSecond.participants.map.keys());
    console.log("current participants", participants);

    // list of participants from the previous realm should be empty
    expect(participants).to.be.empty;

    // check if handler received the updated realmID
    expect(this.handler.getRealmID()).to.be.equal(joinResponse2.uuid);
  }

}
