import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  SceneAudio,
  SceneCode,
  SceneElementMemento,
  SceneImage,
  SceneDesign3D,
  Realm
} from '../../../../colyseus-server/src/room.state';
import { ServerService } from './server.service';
import { buildVector3 } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  subscriptions: Subscription[] = [];
  onUpdate: Subject<SceneElement[]> = new Subject();
  onUpdateImages: Subject<IterableIterator<SceneImage>> = new Subject();
  onUpdateAudios: Subject<IterableIterator<SceneAudio>> = new Subject();
  onUpdateCodes: Subject<IterableIterator<SceneCode>> = new Subject();
  onUpdateDesigns3D: Subject<IterableIterator<SceneDesign3D>> = new Subject();
  onDelete: Subject<string> = new Subject();
  afterJoin: Subject<Realm> = new Subject();

  constructor(private server: ServerService) { }

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
      this.server.onShare.subscribe((id: string) => {
        console.log('onshare subscription', id);
        this.realmUUID = id;
        this.listen2Updates();
      })
    );
    this.server.share();
  }

  join(realmUUID: string) {
    this.realmUUID = null;
    this.unsubscribe();
    this.subscriptions.push(
      this.server.onStateUpdate.subscribe((realm: Realm) => {
        this.realmUUID = realm.id;
        this.afterJoin.next(realm);
        this.listen2Updates();
      })
    );
    this.server.join(realmUUID);
  }

  update(sceneElement: SceneElementMemento) {
    this.server.updateElements([sceneElement]);
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
    this.server.deleteElement(name);
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
      this.server.onStateUpdate.subscribe((update: Realm) => {

        if (update.elements && update.elements.size > 0) {
          const elements = this.memento2Vector3(update.elements.values());
          this.onUpdate.next(elements);
        }

        if (update.images && update.images.size > 0) {
          this.onUpdateImages.next(update.images.values());
        }

        if (update.audios && update.audios.size > 0) {
          this.onUpdateAudios.next(update.audios.values());
        }

        if (update.codes && update.codes.size > 0) {
          this.onUpdateCodes.next(update.codes.values());
        }

        if (update.designs3D && update.designs3D.size > 0) {
          this.onUpdateDesigns3D.next(update.designs3D.values());
        }
      })
    );

    // this.subscriptions.push(
    //   this.server.onDelete.subscribe((request: DeleteRequest) => {
    //     this.onDelete.next(request.name);
    //   })
    // );
  }

  memento2Vector3(data: IterableIterator<SceneElementMemento>): SceneElement[] {
    const result: SceneElement[] = [];
    for (let element of data) {
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
    }
    return result;
  }

  stopShare() {
    this.unsubscribe();
    this.realmUUID = null;
  }
}
