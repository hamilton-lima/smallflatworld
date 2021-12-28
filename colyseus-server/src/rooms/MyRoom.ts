import { Room, Client } from "colyseus";
import { Realm } from "./schema/MyRoomState";

export class MyRoom extends Room<Realm> {

  onCreate (options: any) {
    this.setState(new Realm());
    this.onMessage("type", (client, message) => {});
  }

  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
