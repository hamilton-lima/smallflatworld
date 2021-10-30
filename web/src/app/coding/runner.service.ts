import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import {
  BottomMessageComponent,
  BottomMessageData,
} from './bottom-message/bottom-message.component';
import { AudioPlayerService } from '../shared/audio-player.service';
import { AudioService } from '../library/audio.service';
import { EventsBrokerService } from '../shared/events-broker.service';

function playMP3ByName(name: string) {
  console.log('playMP3', name);
  sharedContext.audio.playMP3ByName(name);
}

function showMessage(message: string) {
  console.log('showmessage', message);
  sharedContext.snackBar.open(message, 'DISMISS', {
    duration: 5000,
  });
}

function showBottomMessage(message: string) {
  console.log('showBottomMessage', message);

  // TODO: accept multiple lines in blockly
  const data = <BottomMessageData>{
    messages: [message],
  };
  const config = <MatBottomSheetConfig>{
    data: data,
  };
  sharedContext.bottomSheet.open(BottomMessageComponent, config);
}

class Context {
  snackBar: MatSnackBar;
  bottomSheet: MatBottomSheet;
  audio: AudioService;
}

let sharedContext: Context;

class CodeRunner {
  onClickHandlers = [];

  constructor(uuid: string, code: string) {
    try {
      // variables exposed to eval()
      const message = showMessage;
      const bottomMessage = showBottomMessage;
      const playMP3 = playMP3ByName;
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

  constructor(
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private player: AudioPlayerService,
    private audio: AudioService,
    private broker: EventsBrokerService
  ) {
    // make injected services available to scripts
    sharedContext = <Context>{
      snackBar: this.snackBar,
      bottomSheet: this.bottomSheet,
      player: this.player,
      audio: this.audio,
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

    // remove existing runner for a deleted element
    broker.onDeleteSceneElement.subscribe((element) =>
      this.delete(element.name)
    );
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
