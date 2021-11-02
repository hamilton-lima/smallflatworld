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

function playSoundByName(name: string) {
  console.log('playSound', name);
  sharedContext.audio.playSoundByName(name);
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
      const playSound = playSoundByName;
      const onClick = this.onClickHandlers;
      
      // execute the code 
      eval(code);
    } catch (error) {
      console.warn('error parsing code', error, code);
    }
    console.log('after', this.onClickHandlers);
  }

  click() {
    for (const handler of this.onClickHandlers) {
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
      const handler = this.registry[uuid];
      if (handler) {
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
  }

  click(uuid: string) {
    this.onClick.next(uuid);
  }

  delete(uuid: string) {
    delete this.registry[uuid];
    // TODO: remove running on repeat events
  }
}
