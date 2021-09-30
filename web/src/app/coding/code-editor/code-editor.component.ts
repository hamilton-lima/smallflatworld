import { ChangeDetectorRef } from "@angular/core";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BlocklyConfig } from "../code-blockly/code-blockly.service";

export interface CodeEditorEvent {
  code: string;
  blocklyDefinition?: string;
}

export interface ModelCode {
  event?: string;
  exception?: string;
  gameDefinition?: number;
  id?: number;
  script?: string;
}

@Component({
  selector: "app-code-editor",
  templateUrl: "./code-editor.component.html",
  styleUrls: ["./code-editor.component.css"],
})
export class CodeEditorComponent implements OnInit {
  config: BlocklyConfig = BlocklyConfig.Default;

  _code: ModelCode;
  blockly: string;

  get code(): ModelCode {
    return this._code;
  }

  @Input() set code(value: ModelCode) {
    if (value) {
      this._code = value;
    } else {
      this._code = <ModelCode>{ event: "all" };
    }

    this.blockly = this._code['blockly'];
    this.changeRef.markForCheck();
  }

  @Output() onChange = new EventEmitter<CodeEditorEvent>();
  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit() {}

  onEditorChange(event: CodeEditorEvent) {
    this.onChange.next(event);
  }
}
