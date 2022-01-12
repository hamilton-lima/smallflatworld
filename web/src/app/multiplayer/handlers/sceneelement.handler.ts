import { SceneElementMemento } from '../../realm/realm.model';
import { Subject } from 'rxjs';
import { GunMessageUpdate } from '../gun-client';
import { ServerService } from '../server.service';
import {
  IMessageFromServerListener,
  IMessageHandler,
  IMessageSender2Server,
  MessageType,
} from './message.handler';

export class SceneElementMementoSender extends IMessageSender2Server<SceneElementMemento> {
  constructor(owner: ServerService) {
    super(owner, 'elements');
  }

  send(type: MessageType, item: SceneElementMemento) {
    console.log('send scenelement', type, item);
    const transport = this.getOwner().getServerTransport();
    if (transport && transport.getRealmID()) {
      if (type === MessageType.remove) {
        transport.shareSceneElement('elements', item as any);
      } else {
        transport.removeSceneElement('elements', item as any);
      }
    }
  }
}

export class SceneElementMementoReceiver extends IMessageFromServerListener<SceneElementMemento> {
  private _onChange: Subject<SceneElementMemento>;
  private _onRemove: Subject<SceneElementMemento>;

  constructor(owner: ServerService) {
    super(owner, 'elements');
    this._onChange = new Subject<SceneElementMemento>();
    this._onRemove = new Subject<SceneElementMemento>();
  }

  onChange(): Subject<SceneElementMemento> {
    return this._onChange;
  }

  onRemove(): Subject<SceneElementMemento> {
    return this._onRemove;
  }

  async handle(message: GunMessageUpdate) {
    console.log('handle(SceneElementMemento)', JSON.stringify(message));
    const element = new SceneElementMemento();

    if (message.data) {
      element.name = message.data.name;
      element.componentID = message.data.componentID;
      element.skipColision = message.data.skipColision;

      const transport = this.getOwner().getServerTransport();

      element.code = await transport.getCode(message.data.code['#']);
      element.position = await transport.getVector3Memento(
        message.data.position['#']
      );
      element.rotation = await transport.getVector3Memento(
        message.data.rotation['#']
      );
      element.scaling = await transport.getVector3Memento(
        message.data.scaling['#']
      );

      this._onChange.next(element);
    } else {
      element.name = message.key;
      this._onRemove.next(element);
    }
  }
}

export class SceneElementMementoHandler extends IMessageHandler<SceneElementMemento> {
  private _to: SceneElementMementoSender;
  private _from: SceneElementMementoReceiver;

  constructor(owner: ServerService) {
    super();
    this._to = new SceneElementMementoSender(owner);
    this._from = new SceneElementMementoReceiver(owner);
  }

  to(): IMessageSender2Server<SceneElementMemento> {
    return this._to;
  }

  from(): IMessageFromServerListener<SceneElementMemento> {
    return this._from;
  }
}
