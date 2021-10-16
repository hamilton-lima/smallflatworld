import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const MESSAGE_DURATION = 4000;

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private snack: MatSnackBar) {}

  warn(message: string) {
    console.warn(message);
    this.snack.open(message, 'DISMISS', {
      duration: MESSAGE_DURATION,
    });
  }

  info(message: string) {
    console.log(message);
    this.snack.open(message, 'DISMISS', {
      duration: MESSAGE_DURATION,
    });
  }
}
