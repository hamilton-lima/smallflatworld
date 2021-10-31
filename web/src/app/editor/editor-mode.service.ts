import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum EditorMode {
  WALK = 'walk',
  ADD = 'add',
  EDIT = 'edit',
}

export enum EditorAction {
  ROTATE = 'rotate',
  SCALE = 'scale',
  MOVEX = 'moveX',
  MOVEY = 'moveY',
  MOVEZ = 'moveZ',
}

@Injectable({
  providedIn: 'root',
})
export class EditorModeService {
  mode: BehaviorSubject<EditorMode> = new BehaviorSubject(EditorMode.WALK);
  editAction: BehaviorSubject<EditorAction> = new BehaviorSubject(
    EditorAction.ROTATE
  );

  edit() {
    this.mode.next(EditorMode.EDIT);
  }

  walk() {
    this.mode.next(EditorMode.WALK);
  }
}
