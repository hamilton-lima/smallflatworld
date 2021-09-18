import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  JoinResponse,
  SceneElement,
  ShareResponse,
  StateUpdate,
} from '../../../../server/src/events.model';
import { ServerService } from './server.service';

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
      this.server.onJoin.subscribe((response:JoinResponse) => {
        this.realmUUID = realmUUID;
        this.listen2Updates();
      })
    );
    this.server.join(realmUUID);
  }

  listen2Updates() {
    this.subscriptions.push(
      this.server.onStateUpdate.subscribe((response: StateUpdate) => {
        this.onUpdate.next(response.data);
      })
    );
    // REMOVE THIS
    this.onUpdate.subscribe( elements => console.log('update', elements));
  }

  stopShare() {
    this.unsubscribe();
    this.realmUUID = null;
  }
}
