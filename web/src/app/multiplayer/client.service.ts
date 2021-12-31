import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  SceneAudio,
  SceneCode,
  SceneElementMemento,
  SceneImage,
  SceneDesign3D,
  Realm,
} from '../../../../colyseus-server/src/room.state';
import { ServerService } from './server.service';
import { MapSchema } from '@colyseus/schema';

class Message<Type> {
  action: 'add' | 'update' | 'remove';
  target: string;
  data: Type;
}

export class MessageSender2Server<Type> {
  constructor(private owner: ServerService, private targetName: string) { }

  send(type: string, item: Type) {
    const message = Object.assign(new Message<Type>(), {
      action: type,
      target: this.targetName,
      data: item,
    });

    if (this.owner.room) {
      console.log('send to server', message);
      this.owner.room.send(message.action, message);
    } else {
      console.warn('Sending message to server before connecting', message);
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
  public readonly onAdd: Subject<Type> = new Subject();
  public readonly onChange: Subject<Type> = new Subject();
  public readonly onRemove: Subject<Type> = new Subject();

  constructor(list: MapSchema<Type>) {
    list.onAdd = this.add;
    list.onChange = this.change;
    list.onRemove = this.remove;
  }

  add(item: Type, key: string) {
    this.onAdd.next(item);
  }

  change(item: Type, key: string) {
    this.onAdd.next(item);
  }

  remove(item: Type, key: string) {
    this.onAdd.next(item);
  }
}

export class MessageHandler<Type> {
  to: MessageSender2Server<Type>;
  from: MessageFromServerListener<Type>;

  constructor(
    private owner: ServerService,
    list: MapSchema<Type>,
    private targetName: string
  ) {
    this.to = new MessageSender2Server(owner, targetName);
    this.from = new MessageFromServerListener(list);
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

  constructor(private server: ServerService) { }

  share() {
    this.server.onShare.subscribe((id: string) => {
      console.log('onshare subscription', id);
      this.realmUUID = id;
      this.setupMessageHandler();
    });
    this.server.share();
  }

  join(realmUUID: string) {
    this.realmUUID = null;
    this.server.onStateUpdate.subscribe((realm: Realm) => {
      this.realmUUID = realm.id;
      this.afterJoin.next(realm);
      this.setupMessageHandler();
    });
    this.server.join(realmUUID);
  }

  setupMessageHandler() {
    this.elements = new MessageHandler(
      this.server,
      this.server.room.state.elements,
      'elements'
    );

    this.characters = new MessageHandler(
      this.server,
      this.server.room.state.characters,
      'characters'
    );

    this.audios = new MessageHandler(
      this.server,
      this.server.room.state.audios,
      'audios'
    );

    this.codes = new MessageHandler(
      this.server,
      this.server.room.state.codes,
      'codes'
    );

    this.designs3D = new MessageHandler(
      this.server,
      this.server.room.state.designs3D,
      'designs3D'
    );

    this.images = new MessageHandler(
      this.server,
      this.server.room.state.images,
      'images'
    );
  }

  stopShare() {
    this.realmUUID = null;
  }
}
