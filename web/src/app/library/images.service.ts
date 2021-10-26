import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { SceneImage } from '../../../../server/src/events.model';
import { ClientService } from '../multiplayer/client.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  onUpdate: BehaviorSubject<SceneImage[]>;

  constructor(private client: ClientService, private realm: RealmService) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.onUpdate.next(newRealm.images);
    });
  }

  add(image: SceneImage) {
    this.client.updateImage(image);
    this.realm.addImage(image);
    this.onUpdate.next(this.realm.getCurrentRealm().images);
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
