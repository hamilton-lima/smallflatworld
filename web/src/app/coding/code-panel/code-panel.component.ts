import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/editor/editor.service';
import { CodeDefinition } from '../../../../../server/src/events.model';
import { CodingService } from '../coding.service';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.scss'],
})
export class CodePanelComponent implements OnInit {
  selected: string;
  codeDefinition: CodeDefinition;
  updatedCodeDefinition: CodeDefinition;
  constructor(
    private service: CodingService,
    private editor: EditorService,
    private runner: RunnerService
  ) {}

  ngOnInit(): void {
    this.service.onEdit.subscribe(async (selected) => {
      console.log('on edit', selected);
      this.selected = selected;
      this.codeDefinition = await this.service.getCode(selected);
      this.updatedCodeDefinition = this.codeDefinition;
    });
  }

  changed(event: CodeDefinition) {
    this.updatedCodeDefinition = event;
  }

  apply() {
    this.editor.saveCode(this.selected, this.updatedCodeDefinition);
    this.runner.register(this.selected, this.updatedCodeDefinition.code);
  }
}
