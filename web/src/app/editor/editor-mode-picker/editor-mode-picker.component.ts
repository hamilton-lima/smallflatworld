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

  @ViewChild('code') codeButton: MatButtonToggle;
  @ViewChild('rotate') rotateButton: MatButtonToggle;
  @ViewChild('scale') scaleButton: MatButtonToggle;
  @ViewChild('moveX') moveXButton: MatButtonToggle;
  @ViewChild('moveY') moveYButton: MatButtonToggle;
  @ViewChild('moveZ') moveZButton: MatButtonToggle;

  editModeController = new ToggleGroupController();
  modifyController = new ToggleGroupController();

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

      if (this.mode == EditorMode.EDIT) {
        if (keys.KeyO) {
          this.modifyController.select('code', this);
        }

        if (keys.KeyR) {
          this.modifyController.select('rotate', this);
        }

        if (keys.KeyC) {
          this.modifyController.select('scale', this);
        }

        if (keys.KeyL) {
          this.modifyController.select('moveX', this);
        }

        if (keys.KeyF) {
          this.modifyController.select('moveY', this);
        }

        if (keys.KeyU) {
          this.modifyController.select('moveZ', this);
        }

        if (
          keys.NumpadAdd ||
          (keys.ShiftLeft && keys.Equal) ||
          (keys.ShiftRight && keys.Equal)
        ) {
          this.editPlus();
        }

        if (keys.NumpadSubtract || keys.Minus) {
          this.editMinus();
        }

        if (keys.Delete || keys.KeyX) {
          this.delete();
        }
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Add children');
    this.editModeController.addChildren('walk', this.walkButton, this.walk);
    this.editModeController.addChildren('add', this.addButton, this.add);
    this.editModeController.addChildren('edit', this.editButton, this.edit);

    this.modifyController.addChildren('code', this.codeButton, this.code);
    this.modifyController.addChildren('rotate', this.rotateButton, this.rotate);
    this.modifyController.addChildren('scale', this.scaleButton, this.scale);
    this.modifyController.addChildren('moveX', this.moveXButton, this.moveX);
    this.modifyController.addChildren('moveY', this.moveYButton, this.moveY);
    this.modifyController.addChildren('moveZ', this.moveZButton, this.moveZ);
  }

  modeChanged(mode: string) {
    console.log('modeChanged', mode);
    this.editModeController.select(mode, this);
  }

  onClick(action:string){
    console.log('action', action);
    this.modifyController.select(action, this);
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
