import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotifyService } from 'src/app/shared/notify.service';
import { CodeDefinition } from '../../../../../server/src/events.model';
import { CodeEditRequest, CodingService } from '../coding.service';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.scss'],
})
export class CodePanelComponent implements OnInit {
  request: CodeEditRequest;
  loading = false;
  dirty = false;
  onReady: Subject<void>;

  constructor(private service: CodingService, private notify: NotifyService) {
    this.onReady = new Subject();
  }

  showCode() {
    return this.request && !this.loading;
  }

  ngOnInit(): void {
    this.service.onEdit.subscribe(async (request) => {
      this.loading = true;
      this.request = request;
      this.dirty = false;
    });

    this.onReady.subscribe(() => {
      this.loading = false;
    });
  }

  changed(code: CodeDefinition) {
    this.request.updatedCodeDefinition = code;
    this.dirty = true;
  }

  apply() {
    this.request.apply();
    this.notify.info('Code applied with success');
    this.dirty = false;
  }
}
