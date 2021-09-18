import { Injectable } from '@angular/core';
import { Vector3 } from '@babylonjs/core';
import { Subject, Subscription } from 'rxjs';
import {
  JoinResponse,
  SceneElementMemento,
  ShareResponse,
  StateUpdate,
} from '../../../../server/src/events.model';
import { SceneElement } from '../persistence/persistence.model';
import { ServerService } from './server.service';
import { buildVector3 } from '../renderer/builders';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  subscriptions: Subscription[] = [];
  onUpdate: Subject<SceneElement[]> = new Subject();

  constructor(private server: ServerService) {}

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
        this.realmUUID = realmUUID;
        this.listen2Updates();
      })
    );
    this.server.join(realmUUID);
  }

  update(sceneElement: SceneElement) {
    this.server.update([sceneElement]);
  }

  listen2Updates() {
    this.subscriptions.push(
      this.server.onStateUpdate.subscribe((response: StateUpdate) => {
        const data = this.memento2Vector3(response.data);
        this.onUpdate.next(data);
      })
    );

    // REMOVE THIS
    this.onUpdate.subscribe((elements) => console.log('update', elements));
  }

  memento2Vector3(data: SceneElementMemento[]): SceneElement[] {
    const result: SceneElement[] = [];
    data.forEach((element: SceneElementMemento) => {
      const converted = <SceneElement>{
        name: element.name,
        position: buildVector3(element.position),
        rotation: buildVector3(element.rotation),
      };
    });
    return result;
  }

  stopShare() {
    this.unsubscribe();
    this.realmUUID = null;
  }
}
