import { Subject } from 'rxjs';
import { SceneElementMemento } from '../realm/realm.model';
import { GunMessageUpdate } from './gun-client';
import { ServerService } from './server.service';

export enum MessageType {
  add = 'add',
  udpate = 'update',
  remove = 'remove',
}

export abstract class IMessageSender2Server<Type> {
  constructor(private owner: ServerService, private targetName: string) {}

  getOwner() {
    return this.owner;
  }

  abstract send(type: MessageType, item: Type);

  add(item: Type) {
    this.send(MessageType.add, item);
  }

  update(item: Type) {
    this.send(MessageType.udpate, item);
  }

  remove(item: Type) {
    this.send(MessageType.remove, item);
  }
}

export abstract class IMessageFromServerListener<Type> {
  abstract onAdd(): Subject<Type>;
  abstract onChange(): Subject<Type>;
  abstract onRemove(): Subject<Type>;

  constructor(private owner: ServerService, private targetName: string) {
    const transport = owner.getServerTransport();
    if (transport && transport.getRealmID()) {
      const subject = transport.getMapListener(targetName);
      if (subject) {
        subject.subscribe((message: GunMessageUpdate) => {
          this.handle(message);
        });
      }
    }
  }

  abstract handle(message: any);
}

export abstract class IMessageHandler<Type> {
  abstract to(): IMessageSender2Server<Type>;
  abstract from(): IMessageFromServerListener<Type>;
}

export class SceneElementMementoSender extends IMessageSender2Server<SceneElementMemento> {
  constructor(owner: ServerService, targetName: string) {
    super(owner, targetName);
  }

  send(type: MessageType, item: SceneElementMemento) {
    console.log('send scenelement', type, item);
    const transport = this.getOwner().getServerTransport();
    if (transport && transport.getRealmID()) {
      transport.shareSceneElement('elements', item as any);
    }
  }
}

export class SceneElementMementoReceiver extends IMessageFromServerListener<SceneElementMemento> {
  private _onAdd: Subject<SceneElementMemento>;
  private _onChange: Subject<SceneElementMemento>;
  private _onRemove: Subject<SceneElementMemento>;

  constructor(owner: ServerService, targetName: string) {
    super(owner, targetName);
    this._onAdd = new Subject<SceneElementMemento>();
    this._onChange = new Subject<SceneElementMemento>();
    this._onRemove = new Subject<SceneElementMemento>();
  }

  onAdd(): Subject<SceneElementMemento> {
    return this._onAdd;
  }

  onChange(): Subject<SceneElementMemento> {
    return this._onChange;
  }

  onRemove(): Subject<SceneElementMemento> {
    return this._onRemove;
  }

  handle(message: GunMessageUpdate) {
    console.log('handle(SceneElementMemento)', message);

    const element = new SceneElementMemento();
    element.name = message.data.name;
    element.componentID = message.data.componentID;
    element.skipColision = message.data.skipColision;

    // code: Object{#: ...},
    // position: Object{#: ...},
    // rotation: Object{#: ...},
    // scaling: Object{#: ...},

    this._onAdd.next(element);
  }
}

export class SceneElementMementoHandler extends IMessageHandler<SceneElementMemento> {
  private _to: SceneElementMementoSender;
  private _from: SceneElementMementoReceiver;

  constructor(private owner: ServerService, private targetName: string) {
    super();
    this._to = new SceneElementMementoSender(owner, targetName);
    this._from = new SceneElementMementoReceiver(owner, targetName);
  }

  to(): IMessageSender2Server<SceneElementMemento> {
    return this._to;
  }

  from(): IMessageFromServerListener<SceneElementMemento> {
    return this._from;
  }
}

// TODO: Remove dummy implementations
export class MessageHandler<Type> extends IMessageHandler<Type> {
  private _to: IMessageSender2Server<Type>;
  private _from: IMessageFromServerListener<Type>;

  constructor(private owner: ServerService, private targetName: string) {
    super();
    this._to = new MessageSender2Server<Type>(owner, targetName);
    this._from = new MessageFromServerListener<Type>(owner, targetName);
  }

  to(): IMessageSender2Server<Type> {
    return this._to;
  }

  from(): IMessageFromServerListener<Type> {
    return this._from;
  }
}

export class MessageSender2Server<Type> extends IMessageSender2Server<Type> {
  constructor(owner: ServerService, targetName: string) {
    super(owner, targetName);
  }

  send(type: MessageType, item: Type) {
    //console.log('empty sender', item);
  }
}

export class MessageFromServerListener<
  Type
> extends IMessageFromServerListener<Type> {
  private _onAdd: Subject<Type>;
  private _onChange: Subject<Type>;
  private _onRemove: Subject<Type>;

  constructor(owner: ServerService, targetName: string) {
    super(owner, targetName);
    this._onAdd = new Subject<Type>();
    this._onChange = new Subject<Type>();
    this._onRemove = new Subject<Type>();
  }

  onAdd(): Subject<Type> {
    return this._onAdd;
  }

  onChange(): Subject<Type> {
    return this._onChange;
  }

  onRemove(): Subject<Type> {
    return this._onRemove;
  }

  handle(message: GunMessageUpdate) {
    // console.log('empty message from server handler', message);
  }
}
