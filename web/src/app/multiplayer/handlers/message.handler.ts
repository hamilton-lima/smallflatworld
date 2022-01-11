import { Subject } from 'rxjs';
import { GunMessageUpdate } from '../gun-client';
import { ServerService } from '../server.service';

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

  getOwner(){
    return this.owner;
  }

  constructor(private owner: ServerService, private targetName: string) {
    const transport = owner.getServerTransport();
    if (transport && transport.getRealmID()) {
      const subject = transport.getMapListener(targetName);
      if (subject) {
        subject.subscribe(async (message: GunMessageUpdate) => {
          await this.handle(message);
          console.log('handle', message);
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
