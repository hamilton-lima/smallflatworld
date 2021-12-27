import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  DeleteRequest,
  JoinResponse,
  SceneAudio,
  SceneCode,
  SceneElementMemento,
  SceneImage,
  ShareResponse,
  StateUpdate,
  SceneDesign3D
} from '../../../../server/src/events.model';
import { ServerService } from './server.service';
import { buildVector3 } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';
import { RealmService } from '../realm/realm.service';
import { Realm } from '../persistence/persistence.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  subscriptions: Subscription[] = [];
  onUpdate: Subject<SceneElement[]> = new Subject();
  onUpdateImages: Subject<SceneImage[]> = new Subject();
  onUpdateAudios: Subject<SceneAudio[]> = new Subject();
  onUpdateCodes: Subject<SceneCode[]> = new Subject();
  onUpdateDesigns3D: Subject<SceneDesign3D[]> = new Subject();
  onDelete: Subject<string> = new Subject();

  constructor(private server: ServerService, private realm: RealmService) { }

  // Removes all subscriptions
  unsubscribe() {
    this.subscriptions.forEach((subscription) => {
      if (subscription && !subscription.closed) {
        subscription.unsubscribe();
      }
    });
    this.subscriptions = [];
  }

  share() {
    this.unsubscribe();
    this.subscriptions.push(
      this.server.onShare.subscribe((response: ShareResponse) => {
        this.realmUUID = response.uuid;
        this.listen2Updates();
      })
    );
    this.server.share();
  }

  join(realmUUID: string) {
    this.realmUUID = null;
    this.unsubscribe();
    this.subscriptions.push(
      this.server.onJoin.subscribe((response: JoinResponse) => {
        // TODO: add casting
        const realm: Realm = response.data;
        this.realmUUID = realmUUID;
        this.realm.addRealmAndSetCurrent(realm)
          this.listen2Updates();
      })
    );
    this.server.join(realmUUID);
  }

  update(sceneElement: SceneElementMemento) {
    this.server.update([sceneElement]);
  }

  updateImage(image: SceneImage) {
    this.server.updateImages([image]);
  }

  updateDesign3D(design3D: SceneDesign3D) {
    this.server.updateDesigns3D([design3D]);
  }

  updateAudio(audio: SceneAudio) {
    this.server.updateAudios([audio]);
  }

  updateCode(code: SceneCode) {
    this.server.updateCodes([code]);
  }

  delete(name: string) {
    this.server.delete(name);
  }

  deleteImage(name: string) {
    this.server.deleteImage(name);
  }

  deleteAudio(name: string) {
    this.server.deleteAudio(name);
  }

  deleteCode(name: string) {
    this.server.deleteCode(name);
  }

  deleteDesign3D(name: string) {
    this.server.deleteDesign3D(name);
  }

  listen2Updates() {
    this.subscriptions.push(
      this.server.onStateUpdate.subscribe((request: StateUpdate) => {
        const data = this.memento2Vector3(request.data);
        this.onUpdate.next(data);

        if (request.images && request.images.length > 0) {
          this.onUpdateImages.next(request.images);
        }

        if (request.audios && request.audios.length > 0) {
          this.onUpdateAudios.next(request.audios);
        }

        if (request.codes && request.codes.length > 0) {
          this.onUpdateCodes.next(request.codes);
        }

        if (request.designs3D && request.designs3D.length > 0) {
          this.onUpdateDesigns3D.next(request.designs3D);
        }
      })
    );

    this.subscriptions.push(
      this.server.onDelete.subscribe((request: DeleteRequest) => {
        this.onDelete.next(request.name);
      })
    );
  }

  memento2Vector3(data: SceneElementMemento[]): SceneElement[] {
    const result: SceneElement[] = [];
    data.forEach((element: SceneElementMemento) => {
      const converted = <SceneElement>{
        name: element.name,
        position: buildVector3(element.position),
        rotation: buildVector3(element.rotation),
        scaling: buildVector3(element.scaling),
        code: element.code,
        imageName: element.imageName,
        skipColision: element.skipColision,
      };
      result.push(converted);
    });
    return result;
  }

  stopShare() {
    this.unsubscribe();
    this.realmUUID = null;
  }
}
