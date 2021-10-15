import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { timer } from 'rxjs';
import { CodeDefinition } from '../../../../../server/src/events.model';
import { BlocklyConfig, BlocklyService } from './code-blockly.service';

@Component({
  selector: 'app-code-blockly',
  templateUrl: './code-blockly.component.html',
  styleUrls: ['./code-blockly.component.scss'],
})
export class CodeBlocklyComponent implements OnChanges {
  workspace: any;

  // generate unique ID for each component
  static nextId = 0;
  id: string;

  @Input() definition: CodeDefinition;
  @Input() config: BlocklyConfig;
  @Output() codeChanged = new EventEmitter<CodeDefinition>();

  constructor(private service: BlocklyService) {
    this.id = `blockly-${CodeBlocklyComponent.nextId++}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng onchanges', changes);
    this.init();
  }

  init() {
    timer(1500).subscribe((done) => {
      console.log('init code');
      this.workspace = this.service.inject(
        this.id,
        this.config,
        this.update.bind(this)
      );
      if (this.definition && this.definition.blocklyDefinition) {
        this.service.setXML(this.definition.blocklyDefinition, this.workspace);
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    this.init();
  }

  update(): void {
    const code = this.service.getCode(this.workspace);
    const blocklyDefinition = this.service.getXML(this.workspace);

    this.codeChanged.next({
      code: code,
      blocklyDefinition,
    } as CodeDefinition);
  }
}
