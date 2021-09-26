import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum EditorMode {
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
  mode: BehaviorSubject<EditorMode> = new BehaviorSubject(EditorMode.ADD);
  editAction: BehaviorSubject<EditorAction> = new BehaviorSubject(
    EditorAction.ROTATE
  );
}
