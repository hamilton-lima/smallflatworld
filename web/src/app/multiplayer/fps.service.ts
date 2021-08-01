import { Injectable } from '@angular/core';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { Subject, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FPSService {
  private subscription: Subscription;
  private messages = 0;
  private readonly timer = timer(1000, 1000);
  public readonly fps: Subject<number> = new Subject();

  constructor(private logger: NgxFancyLoggerService) {}

  setup(message: Subject<Object>) {
    this.unsubscribe();
    this.messages = 0;
    this.subscription = message.subscribe(() => this.messages++);

    this.timer.subscribe(() => {
      this.fps.next(this.messages);
      this.messages = 0;
    });
  }

  unsubscribe() {
    if (this.subscription && !this.subscription.closed) {
      try {
        this.subscription.unsubscribe();
      } catch (error) {
        this.logger.error('Error unsubscribing from message emitter', error);
      }
    }
  }
}
