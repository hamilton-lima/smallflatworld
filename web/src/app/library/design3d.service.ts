import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SceneDesign3D, SceneImage } from '../../../../server/src/events.model';
import { ClientService } from '../multiplayer/client.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class Design3dService {

  onUpdate: BehaviorSubject<SceneDesign3D[]>;
  selected: SceneDesign3D;

  constructor(private client: ClientService, private realm: RealmService) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.onUpdate.next(newRealm.designs3D);
    });
  }

  select(selected: SceneDesign3D) {
    this.selected = selected;
  }

  getCurrent() {
    return this.selected;
  }

  getCurrentName() {
    if (this.selected) {
      return this.selected.name;
    }
    return '';
  }

  findByName(name: string) {
    const found = this.onUpdate.value.find((image) => image.name == name);

    return found;
  }

  add(toAdd: SceneDesign3D) {
    this.client.updateDesign3D(toAdd);
    this.realm.addDesign3D(toAdd).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().designs3D);
    });
  }

  remove(name: string) {
    this.client.deleteDesign3D(name);
    this.realm.deleteDesign3D(name).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().designs3D);
    });
  }

  canRemove(name: string): boolean {
    const found = this.realm.getCurrentRealm().elements.find((element) => {
      return element.name.startsWith(name);
    });

    if (found) {
      return false;
    }
    return true;
  }

  fileInputToBase64(file): Subject<string> {
    const result = new Subject<string>();
    const reader = new FileReader();

    reader.onloadend = function () {
      result.next(reader.result.toString());
    };

    reader.readAsDataURL(file);

    result.subscribe((base64) => {
      const image = <SceneImage>{
        name: uuidv4(),
        base64: base64,
      };
      this.add(image);
    });

    return result;
  }
}
