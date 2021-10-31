import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InputService } from '../shared/input.service';

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

  constructor(private input: InputService) {}

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

  toggleEdit(edit: boolean) {
    if (edit) {
      this.edit();
    } else {
      this.walk();
    }
    this.input.focus();
  }

  toggleCurrentEditMode() {
    const edit = this.mode.value == EditorMode.EDIT;
    this.toggleEdit(!edit);
  }
}
