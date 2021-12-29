import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SceneImage } from '../../../../colyseus-server/src/events.model';
import { ClientService } from '../multiplayer/client.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  onUpdate: BehaviorSubject<SceneImage[]>;
  selected: SceneImage;

  constructor(private client: ClientService, private realm: RealmService) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.onUpdate.next(newRealm.images);
    });
  }

  select(image: SceneImage) {
    this.selected = image;
  }

  getCurrent() {
    return this.selected;
  }

  getCurrentImageName() {
    if (this.selected) {
      return this.selected.name;
    }
    return '';
  }

  findByName(imageName: string) {
    const found = this.onUpdate.value.find((image) => image.name == imageName);

    return found;
  }

  add(image: SceneImage) {
    this.client.updateImage(image);
    this.realm.addImage(image).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().images);
    });
  }

  remove(name: string) {
    this.client.deleteImage(name);
    this.realm.deleteImage(name).then((_) => {
      this.onUpdate.next(this.realm.getCurrentRealm().images);
    });
  }

  canRemove(name: string): boolean {
    const found = this.realm.getCurrentRealm().elements.find((element) => {
      return element.imageName == name;
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
