import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export enum UpDownAction {
  plus = 'plus',
  minus = 'minus',
}

const PRESSED_INTERVAL_EMITTER = 40;

@Component({
  selector: 'app-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.scss'],
})
export class UpDownComponent {
  @Input() disabled = false;
  @Input() iconPlus = 'add_circle_outline';
  @Input() iconMinus = 'remove_circle_outline';
  @Output() onTrigger = new EventEmitter<UpDownAction>();

  plus() {
    this.onTrigger.next(UpDownAction.plus);
  }

  minus() {
    this.onTrigger.next(UpDownAction.minus);
  }

  onPlusMouseUp = new Subject<void>();
  downPlus() {
    const source = interval(PRESSED_INTERVAL_EMITTER);
    source.pipe(takeUntil(this.onPlusMouseUp)).subscribe(() => {
      this.onTrigger.next(UpDownAction.plus);
    });
  }

  upPlus() {
    this.onPlusMouseUp.next();
  }

  onMinusMouseUp = new Subject<void>();
  downMinus() {
    const source = interval(PRESSED_INTERVAL_EMITTER);
    source.pipe(takeUntil(this.onMinusMouseUp)).subscribe(() => {
      this.onTrigger.next(UpDownAction.minus);
    });
  }

  upMinus() {
    this.onMinusMouseUp.next();
  }
}
