import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeDefinition, SceneCode } from '../../../../server/src/events.model';
import { CodingService } from '../coding/coding.service';
import { RunnerService } from '../coding/runner.service';
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
    private name: NameService,
    private coding: CodingService,
    private runner: RunnerService
  ) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.onUpdate.next(newRealm.codes);
    });
  }

  buildCode() {
    const name = DEFAULT_NAME + this.name.getDateString();
    const result = <SceneCode>{
      name: name,
      label: name,
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

  update(code: SceneCode) {
    this.client.updateCode(code);
    this.realm.updateCode(code).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().codes);
    });
  }

  remove(name: string) {
    this.client.deleteCode(name);
    return this.realm.deleteCode(name).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().codes);
    });
  }

  execute(sceneCode: SceneCode) {
    console.log('execute', sceneCode);
    this.runner.register(sceneCode.name, sceneCode.code.code);
  }

  async edit(code: SceneCode) {
    console.log('edit', code);
    const request = await this.coding.editCodeFromLibrary(code);

    // save code changes
    request.onApplyChanges.subscribe(async (request) => {
      const sceneCode = await this.realm.getCode(request.uuid);
      sceneCode.code = request.updatedCodeDefinition;
      this.update(sceneCode);
    });
  }
}
