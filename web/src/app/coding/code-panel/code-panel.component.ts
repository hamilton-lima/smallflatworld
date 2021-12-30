import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EventsBrokerService } from 'src/app/shared/events-broker.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { CodeDefinition } from '../../../../../colyseus-server/src/room.state';
import { CodeEditRequest, CodingService } from '../coding.service';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.scss'],
})
export class CodePanelComponent implements OnInit {
  codeDefinition: CodeDefinition;
  request: CodeEditRequest;
  loading = false;
  dirty = false;
  onReady: Subject<void>;
  reloadCounter = 0;

  constructor(
    private service: CodingService,
    private notify: NotifyService,
    private cdr: ChangeDetectorRef,
    private broker: EventsBrokerService
  ) {
    this.onReady = new Subject();
  }

  showCode() {
    return this.request && !this.loading;
  }

  ngOnInit(): void {
    this.service.onEdit.subscribe(async (request) => {
      console.log('code panel subscribe', request);
      this.loading = true;
      this.request = request;
      this.dirty = false;
      this.reloadCounter ++;
      this.cdr.detectChanges();
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

  close(){
    this.broker.requestToCloseCodePanel.next();
  }
}
