import { Subject } from 'rxjs';
import { SceneElementMemento } from '../realm/realm.model';
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
          this.handle(message);
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

  abstract handle(message: any);
}

export abstract class IMessageHandler<Type> {
  to: IMessageSender2Server<Type>;
  from: IMessageFromServerListener<Type>;

  // constructor(private owner: ServerService, private targetName: string) {
  //   this.to = new IMessageSender2Server(owner, targetName);
  //   this.from = new IMessageFromServerListener(owner, targetName);
  // }
}

export class SceneElementMementoSender extends IMessageSender2Server<SceneElementMemento> {
  send(type: MessageType, item: SceneElementMemento) {
    const transport = this.getOwner().getServerTransport();
    if (transport && transport.getRealmID()) {
      transport.shareSceneElement('elements', item as any);
    }
  }
}

export class SceneElementMementoReceiver extends IMessageFromServerListener<SceneElementMemento> {
  handle(message: any) {
    console.log('message from server sceneelement memento', message);
  }
}

export class SceneElementMementoHandler extends IMessageHandler<SceneElementMemento> {
  constructor(private owner: ServerService, private targetName: string) {
    super();
    super.to = new SceneElementMementoSender(owner, targetName);
    super.from = new SceneElementMementoReceiver(owner, targetName);
  }
}

// TODO: Remove dummy implementations
export class MessageHandler<Type> extends IMessageHandler<Type> {
  to: IMessageSender2Server<Type>;
  from: IMessageFromServerListener<Type>;

  constructor(private owner: ServerService, private targetName: string) {
    super();
    this.to = new MessageSender2Server<Type>(owner, targetName);
    this.from = new MessageFromServerListener<Type>(owner, targetName);
  }
}

export class MessageSender2Server<Type> extends IMessageSender2Server<Type> {
  constructor(owner: ServerService, targetName: string) {
    super(owner, targetName);
  }

  send(type: MessageType, item: Type) {
    console.log('empty sender', item);
  }
}

export class MessageFromServerListener<
  Type
> extends IMessageFromServerListener<Type> {
  handle(message: any) {
    console.log('empty message from server handler', message);
  }
}
