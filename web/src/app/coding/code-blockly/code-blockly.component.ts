import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { CodeDefinition } from '../../../../../colyseus-server/src/room.state';
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

  _definition: CodeDefinition;

  @Input() set definition(_definition: CodeDefinition) {
    console.log('definition updated');
    this._definition = _definition;
    this.init();
  }

  @Input() reload: number;
  @Input() config: BlocklyConfig;
  @Input() onReady: Subject<void>;
  @Output() codeChanged = new EventEmitter<CodeDefinition>();

  constructor(private service: BlocklyService) {
    this.id = `blockly-${CodeBlocklyComponent.nextId++}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng onchanges', changes);
    this.init();
  }

  init() {
    if( this.onReady ){
    // timer(1500).subscribe((done) => {
      console.log('init code', );
      this.workspace = this.service.inject(
        this.id,
        this.config,
        this.update.bind(this)
      );
      if (this._definition && this._definition.blocklyDefinition) {
        this.service.setXML(this._definition.blocklyDefinition, this.workspace);
      }
      this.onReady.next();
    } else {
      console.warn('ready subject is not ready :)');
    }
    // });
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
