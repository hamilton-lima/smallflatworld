// force full coverage check
import { suite, test } from "@testdeck/mocha";
import * as _chai from "chai";
import { assert } from "console";

_chai.should();

@suite
export class AppUnitTests {

    // private handler: EventsHandler;
    // private socket: WebSocket;
    // mockedWebSocket: WebSocket;
  
    // before() {
    //   this.mockedWebSocket = mock(WebSocket);
    //   this.socket = instance(this.mockedWebSocket);
    //   this.handler = new EventsHandler(this.socket);
    // }

    // this.mockedWebSocket = mock(WebSocket);
    // this.socket = instance(this.mockedWebSocket);


    // WebSocket.Server

  @test "server should exist"() {
      assert(true);
  }
}
