import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SceneElementMemento } from '../../../../server/src/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventsBrokerService {
  onDeleteSceneElement: Subject<SceneElementMemento>;
  requestToCloseCodePanel: Subject<void>;
  constructor() {
    this.onDeleteSceneElement = new Subject();
    this.requestToCloseCodePanel = new Subject();
  }
}
