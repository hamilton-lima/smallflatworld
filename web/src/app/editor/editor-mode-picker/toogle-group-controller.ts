import { MatButtonToggle } from '@angular/material/button-toggle';

class ToggleGroupChild {
  child: MatButtonToggle;
  event: Function;
}

class ToggleGroupState {
  children: { [key: string]: ToggleGroupChild };
  position: number;

  constructor(){
    this.position = 0;
    this.children = {};
  }
}

export class ToggleGroupController {
  state: ToggleGroupState;
  private keys: Array<string> = [];

  constructor() {
    this.state = new ToggleGroupState();
  }

  addChildren(key: string, button: MatButtonToggle, event: Function) {
    this.state.children[key].child = button;
    this.state.children[key].event = event;

    // keep keys cached
    this.keys = Object.keys(this.state.children);
  }

  increasePosition() {
    this.state.position++;
    if (this.state.position > this.keys.length - 1) {
      this.state.position = 0;
    }
  }

  next(context: any) {
    this.increasePosition();
    const key = this.keys[this.state.position];
    this.select(key, context);
  }

  select(key: string, context: any) {
    const handler = this.state.children[key];
    if (handler) {
      handler.child.checked = true;
      handler.event.apply(context);
    } else {
      console.warn('Unhandled toogle group key', key);
    }
  }
}
