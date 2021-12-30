import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CodeDefinition, Realm, SceneCode } from '../../../../colyseus-server/src/room.state';
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
      this.propagateChanges(newRealm);
    });
  }

  propagateChanges(realm: Realm) {
    this.onUpdate.next(Array.from(realm.codes.values()));
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
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  update(code: SceneCode) {
    this.client.updateCode(code);
    this.realm.updateCode(code).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  remove(name: string) {
    this.client.deleteCode(name);
    return this.realm.deleteCode(name).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
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
