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
}
