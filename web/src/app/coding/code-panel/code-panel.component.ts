import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EditorService } from 'src/app/editor/editor.service';
import { NotifyService } from 'src/app/shared/notify.service';
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
  loading = false;
  dirty = false;
  onReady: Subject<void>;

  constructor(
    private service: CodingService,
    private editor: EditorService,
    private runner: RunnerService,
    private notify: NotifyService
  ) {
    this.onReady = new Subject();
  }

  showCode() {
    return this.selected && !this.loading;
  }

  ngOnInit(): void {
    this.service.onEdit.subscribe(async (selected) => {
      this.loading = true;
      console.log('on edit', selected);
      this.selected = selected;
      this.codeDefinition = await this.service.getCode(selected);
      this.updatedCodeDefinition = this.codeDefinition;
      this.dirty = false;
    });

    this.onReady.subscribe(() => {
      this.loading = false;
    });
  }

  changed(event: CodeDefinition) {
    this.updatedCodeDefinition = event;
    this.dirty = true;
  }

  apply() {
    this.editor.saveCode(this.selected, this.updatedCodeDefinition);
    this.runner.register(this.selected, this.updatedCodeDefinition.code);
    this.notify.info("Code applied with success");
    this.dirty = false;
  }
}
