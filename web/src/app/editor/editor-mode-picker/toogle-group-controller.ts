import { MatButtonToggle } from '@angular/material/button-toggle';

class ToggleGroupChild {
  child: MatButtonToggle;
  event: Function;
}

class ToggleGroupState {
  children: { [key: string]: ToggleGroupChild };
  position: number;

  constructor() {
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
    this.state.children[key] = new ToggleGroupChild();
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

  // set the position to the key
  resetPosition(key: string) {
    for (let position in this.keys) {
      if (this.keys[position] == key) {
        this.state.position = Number.parseInt(position);
        break;
      }
    }
  }

  next(context: any) {
    this.increasePosition();
    const key = this.keys[this.state.position];
    this.selectAndClick(key, context);
  }

  selectAndClick(key: string, context: any) {
    const handler = this.state.children[key];
    if (handler) {
      handler.child.checked = true;
      handler.event.apply(context);
      this.resetPosition(key);
    } else {
      console.warn('Unhandled toogle group key', key);
    }
  }

  select(key: string, context: any) {
    const handler = this.state.children[key];
    if (handler) {
      handler.child.checked = true;
      this.resetPosition(key);
    } else {
      console.warn('Unhandled toogle group key', key);
    }
  }

  click(key: string, context: any) {
    const handler = this.state.children[key];
    if (handler) {
      handler.event.apply(context);
      this.resetPosition(key);
    } else {
      console.warn('Unhandled toogle group key', key);
    }
  }
}
