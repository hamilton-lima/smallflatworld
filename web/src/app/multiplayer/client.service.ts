import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  SceneAudio,
  SceneCode,
  SceneElementMemento,
  SceneImage,
  SceneDesign3D,
  Realm,
  REALM_MAPS,
} from 'src/app/realm/realm.model';
import { EventsBrokerService } from '../shared/events-broker.service';
import { ServerService } from './server.service';

class Message<Type> {
  action: 'add' | 'update' | 'remove';
  target: string;
  data: Type;
}

export class MessageSender2Server<Type> {
  constructor(private owner: ServerService, private targetName: string) {}

  send(type: string, item: Type) {
    const message = Object.assign(new Message<Type>(), {
      action: type,
      target: this.targetName,
      data: item,
    });

    const transport = this.owner.getServerTransport();

    if (transport && transport.getRealmID()) {
      // TODO: remove this, will need a sender for each type
      transport.shareSceneElement('elements', item as any);
    }
  }

  add(item: Type) {
    this.send('add', item);
  }

  update(item: Type) {
    this.send('update', item);
  }

  remove(item: Type) {
    this.send('remove', item);
  }
}

export class MessageFromServerListener<Type> {
  public onAdd: Subject<Type>;
  public onChange: Subject<Type>;
  public onRemove: Subject<Type>;

  constructor(private owner: ServerService, private targetName: string) {
    this.onAdd = new Subject();
    this.onChange = new Subject();
    this.onRemove = new Subject();
    const self = this;

    const transport = owner.getServerTransport();
    if (transport && transport.getRealmID()) {
      const subject = transport.getMapListener(targetName);
      if (subject) {
        subject.subscribe((message) => {
          console.log('message from server', message);
        });
      }
    }

    // list.onAdd = (item: Type, key: string) => {
    //   self.onAdd.next(item);
    // }

    // list.onChange = (item: Type, key: string) => {
    //   self.onChange.next(item);
    // }

    // list.onRemove = (item: Type, key: string) => {
    //   self.onRemove.next(item);
    // }
  }
}

export class MessageHandler<Type> {
  to: MessageSender2Server<Type>;
  from: MessageFromServerListener<Type>;

  constructor(private owner: ServerService, private targetName: string) {
    this.to = new MessageSender2Server(owner, targetName);
    this.from = new MessageFromServerListener(owner, targetName);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  afterJoin: Subject<Realm> = new Subject();

  elements: MessageHandler<SceneElementMemento>;
  characters: MessageHandler<SceneElementMemento>;
  audios: MessageHandler<SceneAudio>;
  codes: MessageHandler<SceneCode>;
  designs3D: MessageHandler<SceneDesign3D>;
  images: MessageHandler<SceneImage>;

  constructor(
    private server: ServerService,
    private broker: EventsBrokerService
  ) {
    this.setupMessageHandler();
  }

  share(realm: Realm, character: SceneElementMemento) {
    this.server.onShare.subscribe((id: string) => {
      console.log('onshare subscription', id);
      this.realmUUID = id;
      this.setupMessageHandler();
    });
    this.server.share(realm, character);
  }

  join(realmUUID: string, character: SceneElementMemento) {
    this.realmUUID = null;
    this.server.onStateUpdate.subscribe((realm: Realm) => {
      this.realmUUID = realm.id;
      this.afterJoin.next(realm);
      this.setupMessageHandler();
    });
    this.server.join(realmUUID, character);
  }

  setupMessageHandler() {
    this.broker.onUpdateCharacter.subscribe((character) => {
      console.log('client service character', character);
      const transport = this.server.getServerTransport();
      if (transport && transport.getRealmID()) {
        transport.shareSceneElement('characters', character);
      } else {
        console.warn('not connected to send character updates');
      }
    });

    REALM_MAPS.forEach((name) => {
      this[name] = new MessageHandler(this.server, name);
    });
  }

  stopShare() {
    this.realmUUID = null;
  }
}
