import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CodeDefinition } from '../../../../server/src/events.model';
import { RealmService } from '../realm/realm.service';

@Injectable({
  providedIn: 'root',
})
export class CodingService {
  constructor(private realm: RealmService) {}
  public onEdit: Subject<string> = new Subject();

  edit(uuid: string) {
    this.onEdit.next(uuid);
  }

  async getCode(uuid): Promise<CodeDefinition> {
    const element = await this.realm.get(uuid);
    if (element) {
      if (element.code) {
        return element.code;
      } else {
        return new CodeDefinition();
      }
    } else {
      console.warn('element does not exist', uuid);
      return new CodeDefinition();
    }
  }
}
