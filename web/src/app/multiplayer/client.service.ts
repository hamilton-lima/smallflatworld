import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Subject, Subscription } from 'rxjs';
import {
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
  }

  listen2Updates() {
    this.subscriptions.push(
      this.server.onStateUpdate.subscribe((response: StateUpdate) => {
        this.onUpdate.next(response.data);
      })
    );
  }

  stopShare() {
    this.unsubscribe();
    this.realmUUID = null;
  }
}
