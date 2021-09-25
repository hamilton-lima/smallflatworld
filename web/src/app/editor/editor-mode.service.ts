import { Injectable } from '@angular/core';
export enum EditorMode {
  ADD = 'add',
  EDIT = 'edit',
}

@Injectable({
  providedIn: 'root',
})
export class EditorModeService {
  mode: EditorMode = EditorMode.ADD;

  add() {
    this.mode = EditorMode.ADD;
  }

  edit() {
    this.mode = EditorMode.EDIT;
  }

}