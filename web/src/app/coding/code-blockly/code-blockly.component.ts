import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { timer } from "rxjs";
import { BlocklyConfig, BlocklyService } from "./code-blockly.service";
import { CodeEditorEvent } from "../code-editor/code-editor.component";

@Component({
  selector: "app-code-blockly",
  templateUrl: "./code-blockly.component.html",
  styleUrls: ["./code-blockly.component.scss"],
})
export class CodeBlocklyComponent implements OnChanges {
  workspace: any;
  code: string;

  // generate unique ID for each component
  static nextId = 0;
  id:string;

  @Input() blocklyDefinition: string;
  @Input() config: BlocklyConfig;
  @Output() codeChanged = new EventEmitter<CodeEditorEvent>();

  constructor(private service: BlocklyService) {
    this.id = `blockly-${CodeBlocklyComponent.nextId++}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  init(){
    timer(500).subscribe((done) => {
      this.workspace = this.service.inject(
        this.id,
        this.config,
        this.update.bind(this)
      );
      this.service.setXML(this.blocklyDefinition, this.workspace);
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }

  update(): void {
    this.code = this.service.getCode(this.workspace);
    const blocklyDefinition = this.service.getXML(this.workspace);

    this.codeChanged.next({
      code: this.code,
      blocklyDefinition,
    } as CodeEditorEvent);
  }
}
