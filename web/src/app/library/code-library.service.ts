import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeDefinition, SceneCode } from '../../../../server/src/events.model';
import { ClientService } from '../multiplayer/client.service';
import { RealmService } from '../realm/realm.service';
import { NameService } from '../shared/name.service';

const DEFAULT_NAME = 'Code_';

@Injectable({
  providedIn: 'root',
})
export class CodeLibraryService {
  onUpdate: BehaviorSubject<SceneCode[]>;
  selected: SceneCode;

  constructor(
    private client: ClientService,
    private realm: RealmService,
    private name: NameService
  ) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.onUpdate.next(newRealm.codes);
    });
  }

  buildCode() {
    const result = <SceneCode>{
      name: DEFAULT_NAME + this.name.getDateString(),
      code: new CodeDefinition(),
    };
    return result;
  }

  add(code: SceneCode) {
    this.client.updateCode(code);
    this.realm.addCode(code).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().codes);
    });
  }

  remove(name: string) {
    this.client.deleteCode(name);
    return this.realm.deleteCode(name).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().codes);
    });
  }

  execute(code: SceneCode) {
    console.log('execute', code);
  }
}
