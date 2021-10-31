import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum UpDownAction {
  plus = 'plus',
  minus = 'minus',
}

@Component({
  selector: 'app-up-down',
  templateUrl: './up-down.component.html',
  styleUrls: ['./up-down.component.scss'],
})
export class UpDownComponent {
  @Input() iconPlus = 'add_circle_outline';
  @Input() iconMinus = 'remove_circle_outline';
  @Output() onTrigger = new EventEmitter<UpDownAction>();

  plus() {
    this.onTrigger.next(UpDownAction.plus);
  }

  minus() {
    this.onTrigger.next(UpDownAction.minus);
  }
}
