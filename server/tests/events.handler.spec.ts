// force full coverage check
import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { anything, instance, mock, verify } from "ts-mockito";
import WebSocket from "ws";
import { EventsHandler } from "../src/events.handler";
import { MemoryStorage } from "../src/memory.storage";

const chai = require("chai");
chai.use(require("chai-uuid"));

@suite
export class EventsHandlerTests {
  storage = MemoryStorage.getInstance();

  @test "constructor should generate uuid"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);
    const eh = new EventsHandler(client);

    expect(eh.getID()).to.be.a.uuid("v4");
  }

  @test "should throw exception for malformed messages and close client"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);

    const eh = new EventsHandler(client);
    try {
      eh.onMessage("this should be a json");
    } catch (error) {
      expect(error.message).to.be.equal(
        "Error parsing message: [this should be a json]"
      );
      verify(mockedWebSocket.close()).called();
    }
  }

  @test
  "when call onClose should remove participant from storage without errors"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);
    const eh = new EventsHandler(client);
    eh.onClose();
  }

  getParticipantIDsAsArray(realm: string) {
    const participants = this.storage.getStorage(realm).participants;
    const keys = Array.from(participants.map.keys());
    console.log("current participants", keys);
    return keys;
  }

  @test
  "when call onClose should remove participant from storage"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);
    const eh = new EventsHandler(client);

    this.storage.addRealm("foo");
    this.storage.addParticipant("foo", eh.getID(), client);
    
    // this mocks share/join behaviour that set the realmID back to the event handler
    eh.setRealmID("foo");

    const keys = this.getParticipantIDsAsArray("foo");
    expect(keys).to.have.members([eh.getID()]);

    eh.onClose();

    const keysAfterClose = this.getParticipantIDsAsArray("foo");
    console.log('members after on close', keysAfterClose);
    expect(keysAfterClose).to.not.have.members([eh.getID()]);

  }
}
