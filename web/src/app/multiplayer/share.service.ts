import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  realmUUID: string;
  constructor() {}

  start() {
    this.realmUUID = 'test-realmUUID';
  }
  stop() {
    this.realmUUID = null;
  }
}
