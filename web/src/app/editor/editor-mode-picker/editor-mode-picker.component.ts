import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { InputService } from 'src/app/shared/input.service';
import { KeyboardService, KeyState } from 'src/app/renderer/keyboard.service';
import {
  EditorAction,
  EditorMode,
  EditorModeService,
} from '../editor-mode.service';
import { EditorService } from '../editor.service';
import { ToggleGroupController } from './toogle-group-controller';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UpDownAction } from '../up-down/up-down.component';

@Component({
  selector: 'app-editor-mode-picker',
  templateUrl: './editor-mode-picker.component.html',
  styleUrls: ['./editor-mode-picker.component.scss'],
})
export class EditorModePickerComponent implements AfterViewInit {
  mode: EditorMode;
  editModeON: boolean;
  disableEdit = true;

  @ViewChild('code') codeButton: MatButtonToggle;
  @ViewChild('rotate') rotateButton: MatButtonToggle;
  @ViewChild('scale') scaleButton: MatButtonToggle;
  @ViewChild('moveX') moveXButton: MatButtonToggle;
  @ViewChild('moveY') moveYButton: MatButtonToggle;
  @ViewChild('moveZ') moveZButton: MatButtonToggle;

  modifyController = new ToggleGroupController();

  constructor(
    private input: InputService,
    private service: EditorModeService,
    private editor: EditorService,
    private keyboard: KeyboardService
  ) {
    service.mode.subscribe((mode) => {
      this.input.focus();
      this.mode = mode;
      this.editModeON = this.mode == EditorMode.EDIT;
    });

    editor.onSelectMesh.subscribe((mesh) => {
      if (mesh) {
        this.disableEdit = false;
      } else {
        this.disableEdit = true;
      }
    });

    this.keyboard.onKeyPress.subscribe((keys: KeyState) => {
      if (keys.KeyE) {
        this.service.toggleEdit(!this.editModeON);
      }

      if (this.mode == EditorMode.EDIT) {
        if (keys.KeyO) {
          this.modifyController.selectAndClick('code', this);
        }

        if (keys.KeyR) {
          this.modifyController.selectAndClick('rotate', this);
        }

        if (keys.KeyC) {
          this.modifyController.selectAndClick('scale', this);
        }

        if (keys.KeyL) {
          this.modifyController.selectAndClick('moveX', this);
        }

        if (keys.KeyF) {
          this.modifyController.selectAndClick('moveY', this);
        }

        if (keys.KeyU) {
          this.modifyController.selectAndClick('moveZ', this);
        }

        if (
          keys.NumpadAdd ||
          (keys.ShiftLeft && keys.Equal) ||
          (keys.ShiftRight && keys.Equal)
        ) {
          this.executeEdit(UpDownAction.plus);
        }

        if (keys.NumpadSubtract || keys.Minus) {
          this.executeEdit(UpDownAction.minus);
        }

        if (keys.Delete || keys.KeyX) {
          this.delete();
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.modifyController.addChildren('code', this.codeButton, this.code);
    this.modifyController.addChildren('rotate', this.rotateButton, this.rotate);
    this.modifyController.addChildren('scale', this.scaleButton, this.scale);
    this.modifyController.addChildren('moveX', this.moveXButton, this.moveX);
    this.modifyController.addChildren('moveY', this.moveYButton, this.moveY);
    this.modifyController.addChildren('moveZ', this.moveZButton, this.moveZ);
  }

  onClick(action: string) {
    console.log('action', action);
    this.modifyController.selectAndClick(action, this);
  }

  walk() {
    this.input.focus();
    this.service.mode.next(EditorMode.WALK);
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

  delete() {
    this.input.focus();
    this.editor.deleteSelected();
  }

  code() {
    this.input.focus();
    this.editor.editCode();
  }

  hideEditButtons() {
    return !this.editModeON;
  }

  changeEdit(event: MatSlideToggleChange) {
    this.service.toggleEdit(event.checked);
  }

  executeEdit(event: UpDownAction) {
    if (event == UpDownAction.plus) {
      this.editor.editPlus();
    }
    if (event == UpDownAction.minus) {
      this.editor.editMinus();
    }
    this.input.focus();
  }

  executeRotate(event: UpDownAction) {
    this.rotate();
    this.executeEdit(event);
  }

  executeScale(event: UpDownAction) {
    this.scale();
    this.executeEdit(event);
  }

  executeMoveX(event: UpDownAction) {
    this.moveX();
    this.executeEdit(event);
  }

  executeMoveY(event: UpDownAction) {
    this.moveY();
    this.executeEdit(event);
  }

  executeMoveZ(event: UpDownAction) {
    this.moveZ();
    this.executeEdit(event);
  }
}
