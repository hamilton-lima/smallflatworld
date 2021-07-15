import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InputService {
  target: ElementRef<HTMLCanvasElement>;
  constructor() {}

  setTarget(target: ElementRef<HTMLCanvasElement>) {
    this.target = target;
  }

  focus() {
    if (this.target) {
      this.target.nativeElement.focus();
    }
  }
}
