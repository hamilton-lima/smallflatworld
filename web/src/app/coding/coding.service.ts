import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CodeDefinition } from '../../../../server/src/events.model';
import { EditorService } from '../editor/editor.service';
import { RealmService } from '../realm/realm.service';
import { MeshService } from '../renderer/mesh.service';
import { RunnerService } from './runner.service';

export class CodeEditRequest {
  uuid: string;
  codeDefinition: CodeDefinition;
  updatedCodeDefinition: CodeDefinition;
  onApplyChanges: Subject<CodeEditRequest>;

  constructor(uuid: string, code: CodeDefinition) {
    this.uuid = uuid;
    this.codeDefinition = code;
    this.updatedCodeDefinition = code;
    this.onApplyChanges = new Subject<CodeEditRequest>();
  }

  apply() {
    this.onApplyChanges.next(this);
  }
}

@Injectable({
  providedIn: 'root',
})
export class CodingService {
  // public onEditParent: Subject<string> = new Subject();

  public onEdit: Subject<CodeEditRequest> = new Subject();

  constructor(private realm: RealmService) {}

  async editParent(uuid: string): Promise<CodeEditRequest> {
    const code = await this.getCodeFromSceneElement(uuid);
    const request = new CodeEditRequest(uuid, code);
    this.onEdit.next(request);
    return request;
  }

  async getCodeFromSceneElement(uuid): Promise<CodeDefinition> {
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
