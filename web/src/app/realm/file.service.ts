import { Injectable } from '@angular/core';
import { RealmService } from '../realm/realm.service';
import { NameService } from '../shared/name.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private realm: RealmService, private name: NameService) {}

  download() {
    const currentRealm = this.realm.getCurrentRealm();
    const data = this.realm.toJSON(currentRealm);
    const dateFileName = this.name.getDateString();
    let element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(data)
    );
    element.setAttribute(
      'download',
      `${currentRealm.name}_${dateFileName}.json`
    );
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
