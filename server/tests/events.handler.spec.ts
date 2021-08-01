// force full coverage check
import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { anything, capture, instance, mock, verify, when } from "ts-mockito";
import WebSocket from "ws";
import { EventsHandler } from "../src/events.handler";
import { Actions, ClientResponse, JoinRequest } from "../src/events.model";
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
    console.log("members after on close", keysAfterClose);
    expect(keysAfterClose).to.not.have.members([eh.getID()]);
  }

  @test
  "send add realmID to the message and call websocket.send"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);
    const eh = new EventsHandler(client);
    eh.setRealmID("foo.realm");
    const joinData = <JoinRequest>{ uuid: "foo" };
    eh.send(Actions.Join, joinData);

    verify(mockedWebSocket.send(anything())).called();

    const [response] = capture(mockedWebSocket.send).first();
    const message: ClientResponse = JSON.parse(response);

    expect(message.uuid).to.be.equal("foo.realm");
    expect(message.action).to.be.equal(Actions.Join);
    expect(message.data).to.be.eql(joinData);
  }

  @test
  "when sending the message should throw exception and close connection in case of error"() {
    const mockedWebSocket = mock(WebSocket);
    const client = instance(mockedWebSocket);

    // simulate error on websocket client
    when(mockedWebSocket.send(anything())).thenThrow(
      new Error("something bad happened here")
    );

    const eh = new EventsHandler(client);
    eh.setRealmID("foo.realm");
    const joinData = <JoinRequest>{ uuid: "foo" };

    try {
      eh.send(Actions.Join, joinData);
    } catch (error) {
      // connection should be closed
      verify(mockedWebSocket.close()).called();
      // and exception generated
      expect(error.message).to.have.string("Error sending message ");
    }
  }
}
