import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  realmUUID: string;
  constructor() {}

  share() {
    this.realmUUID = 'test-realmUUID';
  }

  stopShare() {
    this.realmUUID = null;
  }
}
