import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

class CodeRunner {
  onClickHandlers = [];
  constructor(parent: RunnerService, uuid: string, code: string) {
    const message = parent.showMessage;
    const onClick = this.onClickHandlers;
    eval(code);
  }

  click() {
    for (const handler of this.onClickHandlers) {
      console.log('call handler function');
      handler();
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class RunnerService {
  public onCLick: Subject<string> = new Subject();

  registry = {};
  constructor(public snackBar: MatSnackBar) {
    this.onCLick.subscribe((uuid) => {
      const handler = this.registry[uuid];
      if (handler) {
        console.log('handler onclick found');
        handler.click();
      }
    });
  }

  showMessage(message: string) {
    console.log('showmessage', message);
    this.snackBar.open(message, 'DISMISS', {
      duration: 5000,
    });
  }

  register(uuid: string, code: string) {
    this.registry[uuid] = new CodeRunner(this, uuid, code);
  }

  click(uuid: string) {
    this.onCLick.next(uuid);
  }
}
