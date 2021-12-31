import { Room, Client } from "colyseus";
import { Actions, RealmSchema, SceneElementMemento } from "./room.state";

export class MyRoom extends Room<RealmSchema> {

  onCreate(options: any) {

    const realm = new RealmSchema();
    realm.elements.set('foo', new SceneElementMemento());
    realm.elements.set('bar', new SceneElementMemento());
    realm.elements.delete('bar');
    this.setState(realm);


    // this.onMessage(Actions.UpdateElements, (client, elements: SceneElementMemento[]) => {
    //   elements.forEach(element => {
    //     const current = this.state.elements.get(element.name);
    //     if(current){
    //       current.code.assign(element.code);
    //       current.position.assign(element.position);
    //       current.rotation.assign(element.rotation);
    //       current.scaling.assign(element.scaling);
    //       console.log('element updated', current);
    //     } else {
    //       const current = new SceneElementMemento();
    //       current.name = element.name;
    //       current.componentID = element.componentID;
    //       current.imageName = element.imageName;
    //       current.skipColision = element.skipColision;
    //       current.code.assign(element.code);
    //       current.position.assign(element.position);
    //       current.rotation.assign(element.rotation);
    //       current.scaling.assign(element.scaling);
    //       this.state.elements.set(element.name, current);
    //     }
    //   });
    // });

    this.onMessage("*", (client, type, message)=>{
      console.log('on message', client.id, message);
    });

    // this.onMessage(Actions.AddElement, (client, element: SceneElementMemento) => {
    //   this.state.elements.set(element.name, new SceneElementMemento().assign(element));
    //   console.log('element created', element);
    // });

  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}
