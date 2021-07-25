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
export class MemoryStorageUnitTests {
  storage = MemoryStorage.getInstance();

  before() {
    this.storage.reset();
  }

  @test "should return error if realm dont exist"() {
    expect(this.storage.getStorage.bind(this.storage, "foo")).to.throw(
      "uuid dont exist in memory"
    );

    const self = this;
    expect(function () {
      self.storage.getStorage("foo");
    }).to.throw("uuid dont exist in memory");

    expect(() => {
      this.storage.getStorage("foo");
    }).to.throw("uuid dont exist in memory");

    try {
      this.storage.getStorage("foo");
    } catch (error) {
      expect(error.message).to.be.equal("uuid dont exist in memory");
    }
  }

  @test "should return error if realm already exist"() {
    this.storage.addRealm("foo");

    try {
      this.storage.addRealm("foo");
    } catch (error) {
      expect(error.message).to.be.equal("uuid already in memory");
    }
  }

  mockWebSocket() {
    const mockedWebSocket = mock(WebSocket);
    return instance(mockedWebSocket);
  }

  getParticipantIDsAsArray(realm: string) {
    const participants = this.storage.getStorage(realm).participants;
    const keys = Array.from(participants.map.keys());
    console.log("current participants", keys);
    return keys;
  }

  @test "should add and remove participants from realm"() {
    this.storage.addRealm("foo");
    this.storage.addParticipant("foo", "hulk", this.mockWebSocket());
    this.storage.addParticipant("foo", "loki", this.mockWebSocket());

    const keys = this.getParticipantIDsAsArray("foo");
    expect(keys).to.have.members(["hulk", "loki"]);

    this.storage.addParticipant("foo", "Black widow", this.mockWebSocket());

    expect(this.getParticipantIDsAsArray("foo")).to.have.members([
      "hulk",
      "loki",
      "Black widow",
    ]);

    // TVA interference here...
    this.storage.removeParticipant("foo", "loki");

    expect(this.getParticipantIDsAsArray("foo")).to.have.members([
      "hulk",
      "Black widow",
    ]);
  }
}
