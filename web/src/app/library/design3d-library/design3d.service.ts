import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Realm, SceneDesign3D, SceneImage } from 'src/app/realm/realm.model';
import { ClientService } from '../../multiplayer/client.service';
import { RealmService } from '../../realm/realm.service';

@Injectable({
  providedIn: 'root'
})
export class Design3dService {

  onUpdate: BehaviorSubject<SceneDesign3D[]>;
  selected: SceneDesign3D;

  constructor(private client: ClientService, private realm: RealmService) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.propagateChanges(newRealm);
    });
  }

  propagateChanges(realm: Realm) {
    this.onUpdate.next(Array.from(realm.designs3D.values()));
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
    this.client.designs3D.to().update(toAdd);
    this.realm.addDesign3D(toAdd).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  remove(design3D: SceneDesign3D) {
    this.client.designs3D.to().remove(design3D);
    this.realm.deleteDesign3D(design3D.name).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  canRemove(name: string): boolean {
    let found = null;
    for (let element of this.realm.getCurrentRealm().elements.values()) {
      if (element.componentID == name) {
        found = element;
      }
    }

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
        name: file.name,
        base64: base64,
      };
      this.add(image);
    });

    return result;
  }
}
