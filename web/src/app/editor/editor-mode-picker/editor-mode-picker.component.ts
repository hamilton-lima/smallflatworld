import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';
import {
  EditorAction,
  EditorMode,
  EditorModeService,
} from '../editor-mode.service';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor-mode-picker',
  templateUrl: './editor-mode-picker.component.html',
  styleUrls: ['./editor-mode-picker.component.scss'],
})
export class EditorModePickerComponent implements OnInit {
  mode: EditorMode;
  constructor(
    private input: InputService,
    private service: EditorModeService,
    private editor: EditorService
  ) {
    service.mode.subscribe((mode) => (this.mode = mode));
  }

  ngOnInit(): void {}

  add() {
    this.input.focus();
    this.service.mode.next(EditorMode.ADD);
  }

  edit() {
    this.input.focus();
    this.service.mode.next(EditorMode.EDIT);
  }

  rotate() {
    this.input.focus();
    this.service.editAction.next(EditorAction.ROTATE);
  }

  scale() {
    this.input.focus();
    this.service.editAction.next(EditorAction.SCALE);
  }

  moveX() {
    this.input.focus();
    this.service.editAction.next(EditorAction.MOVEX);
  }

  moveY() {
    this.input.focus();
    this.service.editAction.next(EditorAction.MOVEY);
  }

  moveZ() {
    this.input.focus();
    this.service.editAction.next(EditorAction.MOVEZ);
  }

  editPlus() {
    this.input.focus();
    this.editor.editPlus();
  }

  editMinus() {
    this.input.focus();
    this.editor.editMinus();
  }

  delete() {
    this.input.focus();
    this.editor.deleteSelected();
  }
}
