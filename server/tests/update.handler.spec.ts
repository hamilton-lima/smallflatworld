import { suite, test } from "@testdeck/mocha";
import { expect } from "chai";
import {
  mock,
  verify,
  capture,
  anything,
  instance,
  resetCalls,
} from "ts-mockito";
import { EventsHandler } from "../src/events.handler";
import WebSocket from "ws";
import {
  Actions,
  ClientMessage,
  JoinRequest,
  JoinResponse,
  SceneElement,
  StateUpdate,
  Vector3,
} from "../src/events.model";
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

  // create fake realm
  createRealm(realm: string) {
    MemoryStorage.getInstance().addRealm(realm);
  }

  // make sure to call create first
  joinRealm(realm: string, handler: EventsHandler) {
    // join fake realm
    const join = JSON.stringify(<ClientMessage>{
      action: Actions.Join,
      data: <JoinRequest>{ uuid: realm },
    });
    console.log("join message", JSON.stringify(join));

    // join the realm
    handler.onMessage(join);
  }

  @test "should update storage with new state"() {
    this.createRealm(realm1);
    this.joinRealm(realm1, this.handler);

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
    this.createRealm(realm1);
    this.joinRealm(realm1, this.handler);

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
    this.createRealm(realm2);
    this.joinRealm(realm2, this.handler);

    // sends first state of the realm
    const message = JSON.stringify(<ClientMessage>{
      action: Actions.Update,
      data: <StateUpdate>{
        data: [sceneElement1],
      },
    });
    console.log("first state", message);
    this.handler.onMessage(message);

    // second client
    const mockedWebSocket2 = mock(WebSocket);
    const socket2 = instance(mockedWebSocket2);
    const handler2 = new EventsHandler(socket2);
    this.joinRealm(realm2, handler2);

    // checks if received the current state of the realm
    verify(mockedWebSocket2.send(anything())).called();

    const [response] = capture(mockedWebSocket2.send).first();
    const update: JoinResponse = JSON.parse(response);
    console.log("update data", update.data);
    expect(update.data.data).to.be.eql([sceneElement1]);

    // reset calls to websocket
    resetCalls(mockedWebSocket2);

    // send another state update
    const message2 = JSON.stringify(<ClientMessage>{
      action: Actions.Update,
      data: <StateUpdate>{
        data: [sceneElement3],
      },
    });
    this.handler.onMessage(message2);

    // checks if received the updates
    verify(mockedWebSocket2.send(anything())).called();

    const [response2] = capture(mockedWebSocket2.send).last();
    const update2: StateUpdate = JSON.parse(response2);
    console.log("update data2 ", update2);
    expect(update2.data).to.be.eql([sceneElement3]);
  }
}
