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
import { MessageHandler, SceneElementMementoHandler} from './message.handler';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  afterJoin: Subject<Realm> = new Subject();

  elements: SceneElementMementoHandler;
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
      const transport = this.server.getServerTransport();
      if (transport && transport.getRealmID()) {
        transport.shareSceneElement('characters', character);
      } 
    });

    this.elements = new SceneElementMementoHandler(this.server, 'elements');
    this.characters = new MessageHandler<SceneElementMemento>(this.server, 'characters');
    this.audios = new MessageHandler<SceneAudio>(this.server, 'audios');
    this.codes = new MessageHandler<SceneCode>(this.server, 'codes');
    this.designs3D = new MessageHandler<SceneDesign3D>(this.server, 'designs3D');
    this.images = new MessageHandler<SceneImage>(this.server, 'images');
  }

  stopShare() {
    this.realmUUID = null;
  }
}
