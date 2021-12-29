import { Room, Client } from "colyseus";
import { Actions, SceneElementMemento } from "./events.model";
import { Realm } from "./room.state";

export class MyRoom extends Room<Realm> {

  onCreate (options: any) {
    this.setState(new Realm());
    this.onMessage(Actions.UpdateElements, (client, elements: SceneElementMemento[]) => {
      elements.forEach( element =>{
        const current = this.state.elements.get(element.name);
        current.code.assign( element.code);
        current.position.assign( element.position );
        current.rotation.assign( element.rotation );
        current.scaling.assign( element.scaling );
        console.log('element updated', current);
      });
    });
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
