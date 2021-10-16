import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class KeyState {
  ArrowLeft: boolean;
  ArrowRight: boolean;
  ArrowUp: boolean;
  ArrowDown: boolean;
  Space: boolean;
  KeyW: boolean;
  KeyS: boolean;
  KeyA: boolean;
  KeyD: boolean;
  KeyM: boolean;
  KeyO: boolean;
  KeyR: boolean;
  KeyC: boolean;
  KeyL: boolean;
  KeyF: boolean;
  KeyU: boolean;
  KeyX: boolean;
  Minus: boolean;
  ShiftRight: boolean;
  ShiftLeft: boolean;
  AltRight: boolean;
  AltLeft: boolean;
  ControlRight: boolean;
  ControlLeft: boolean;
  NumpadAdd: boolean;
  NumpadSubtract: boolean;
  Delete: boolean;
  Tab: boolean;
  Equal: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  public readonly keyState = new KeyState();
  public onKeyPress: Subject<KeyState> = new Subject();
  constructor() {}

  down(event: KeyboardEvent) {
    const key = this.keyState[event.code];

    if (typeof key != undefined) {
      this.keyState[event.code] = true;
      this.keyPressed();
    }
  }

  keyPressed() {
    this.onKeyPress.next(this.keyState);
  }

  up(event: KeyboardEvent) {
    const key = this.keyState[event.code];
    if (typeof key != undefined) {
      this.keyState[event.code] = false;
    }
  }
}
