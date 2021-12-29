import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SceneElementMemento } from '../../../../colyseus-server/src/events.model';
import { EngineState } from '../renderer/renderer.model';

@Injectable({
  providedIn: 'root',
})
export class EventsBrokerService {
  onDeleteSceneElement: Subject<SceneElementMemento>;
  requestToCloseCodePanel: Subject<void>;
  engineState: BehaviorSubject<EngineState>;
  onUpdateCharacter: Subject<SceneElementMemento>;

  constructor() {
    this.onDeleteSceneElement = new Subject();
    this.requestToCloseCodePanel = new Subject();
    this.onUpdateCharacter = new Subject();
    this.engineState = new BehaviorSubject(null);
  }
}
