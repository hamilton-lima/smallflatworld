import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import { mock, verify, capture, anything, instance } from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import {
  Actions,
  ClientMessage,
  JoinRequest,
  SceneElement,
  ShareResponse,
  StateUpdate,
  Vector3,
} from "../src/events.model";
import { generateKeyPair } from "crypto";
import { MemoryStorage } from "../src/memory.storage";

const vector3A = <Vector3>{
  x: "10",
  y: "-10.12211",
  z: "320.34234",
};

const vector3B = <Vector3>{
  x: "10.12211",
  y: "320.34234",
  z: "10",
};

const vector3C = <Vector3>{
  x: "-320.34234",
  y: "10",
  z: "10.12211",
};

const sceneElement1 = <SceneElement>{
  name: "77d9317d-1a7a-483c-bb8b-f6fe5b14a948",
  position: vector3A,
  rotation: vector3C,
};

const sceneElement2 = <SceneElement>{
  name: "3958343a-60c0-40ef-b0bd-c3d44326c249",
  position: vector3A,
  rotation: vector3C,
};

const sceneElement3 = <SceneElement>{
  name: "d7686b0a-d144-46a7-8c08-0677b360b5e4",
  position: vector3A,
  rotation: vector3C,
};

const realm1 = "1b007506-e525-42ca-932e-1ef72e9ef877";
const realm2 = "7b8dc9ca-de5c-4dba-907e-a62c9932808c";

@suite
export class UpdateHandlerUnitTests {
  private handler: EventsHandler;
  private socket: WebSocket;
  mockedWebSocket: WebSocket;

  before() {
    this.mockedWebSocket = mock(WebSocket);
    this.socket = instance(this.mockedWebSocket);
    this.handler = new EventsHandler(this.socket);
    MemoryStorage.getInstance().reset();
  }

  createAndJoinRealm(realm: string) {
    // create fake realm
    MemoryStorage.getInstance().addRealm(realm);

    // join fake realm
    const join = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: realm },
    });
    console.log("join message", JSON.stringify(join));

    // join the realm
    this.handler.onMessage(join);
  }

  @test "should update storage with new state"() {
    this.createAndJoinRealm(realm1);

    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Update,
      data: <StateUpdate>{
        data: [sceneElement1],
      },
    });
    console.log("update message", message);
    this.handler.onMessage(message);

    const storage = MemoryStorage.getInstance().getStorage(realm1);

    const firstElement = Array.from(storage.states.map.values())[0];
    expect(firstElement).to.be.deep.equal(sceneElement1);
  }

  buildMessageForSceneElement(elements: SceneElement[]) {
    return JSON.stringify(<ClientMessage>{
      action: Actions.Update,
      data: <StateUpdate>{
        data: elements,
      },
    });
  }

  @test "should update storage with new state, for an existing element"() {
    this.createAndJoinRealm(realm1);

    this.handler.onMessage(
      this.buildMessageForSceneElement([sceneElement1, sceneElement2])
    );

    sceneElement2.position.x = "0.4242";

    this.handler.onMessage(this.buildMessageForSceneElement([sceneElement2]));

    const storage = MemoryStorage.getInstance().getStorage(realm1);

    const element2 = Array.from(storage.states.map.values()).find(
      (state) => state.name == sceneElement2.name
    );
    expect(element2).to.be.deep.equal(sceneElement2);
  }

  @test "should send message to realm participants"() {
    // TODO: implement this
    expect(false).to.be.true;
  }
}
