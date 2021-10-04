import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


function showMessage(message: string) {
  console.log('showmessage', message);
  sharedContext.snackBar.open(message, 'DISMISS', {
    duration: 5000,
  });
}

class Context {
  snackBar: MatSnackBar;
}
let sharedContext: Context; 

class CodeRunner {
  onClickHandlers = [];

  constructor(uuid: string, code: string) {
    try {
      // variables exposed to eval()
      const message = showMessage;
      const onClick = this.onClickHandlers;

      eval(code);
    } catch (error) {
      console.warn('error parsing code', error, code);
    }
    console.log('after', this.onClickHandlers);
  }

  click() {
    for (const handler of this.onClickHandlers) {
      console.log('call handler function');
      // inject this context to the function
      handler.call(this);
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class RunnerService {
  public onClick: Subject<string> = new Subject();
  registry = {};

  constructor(public snackBar: MatSnackBar) {
    // make injected services available to scripts
    sharedContext = <Context>{
      snackBar: this.snackBar,
    };

    this.onClick.subscribe((uuid) => {
      console.log('click', uuid);

      const handler = this.registry[uuid];
      console.log('handler', handler, this.registry);
      if (handler) {
        console.log('handler onclick found');
        handler.click();
      }
    });
  }

  register(uuid: string, code: string) {
    this.registry[uuid] = new CodeRunner(uuid, code);
    console.log('registry', this.registry);
  }

  click(uuid: string) {
    console.log('click', uuid);
    this.onClick.next(uuid);
  }

  delete(uuid: string) {
    delete this.registry[uuid];
    // TODO: remove running on repeat events
  }
}
