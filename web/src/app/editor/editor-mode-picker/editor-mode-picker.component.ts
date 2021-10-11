import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { InputService } from 'src/app/input.service';
import { KeyboardService, KeyState } from 'src/app/renderer/keyboard.service';
import {
  EditorAction,
  EditorMode,
  EditorModeService,
} from '../editor-mode.service';
import { EditorService } from '../editor.service';
import { ToggleGroupController } from './toogle-group-controller';

@Component({
  selector: 'app-editor-mode-picker',
  templateUrl: './editor-mode-picker.component.html',
  styleUrls: ['./editor-mode-picker.component.scss'],
})
export class EditorModePickerComponent implements AfterViewInit {
  mode: EditorMode;
  @ViewChild('editMode') editMode: MatButtonToggleGroup;
  @ViewChild('walk') walkButton: MatButtonToggle;
  @ViewChild('add') addButton: MatButtonToggle;
  @ViewChild('edit') editButton: MatButtonToggle;

  editModeController = new ToggleGroupController();

  constructor(
    private input: InputService,
    private service: EditorModeService,
    private editor: EditorService,
    private keyboard: KeyboardService
  ) {
    service.mode.subscribe((mode) => (this.mode = mode));
    this.keyboard.onKeyPress.subscribe((keys: KeyState) => {
      console.log('pressed', keys);
      if (keys.KeyM) {
        this.editModeController.next(this);
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Add children');
    this.editModeController.addChildren('walk', this.walkButton, this.walk);
    this.editModeController.addChildren('add', this.addButton, this.add);
    this.editModeController.addChildren('edit', this.editButton, this.edit);
  }

  modeChanged(mode: string) {
    console.log('modeChanged', mode);
    this.editModeController.select(mode, this);
  }

  walk() {
    this.input.focus();
    this.service.mode.next(EditorMode.WALK);
  }

  add() {
    this.input.focus();
    this.service.mode.next(EditorMode.ADD);
  }

  edit() {
    console.log('edit');
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

  code() {
    this.input.focus();
    this.editor.editCode();
  }
}
