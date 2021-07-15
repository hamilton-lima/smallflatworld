import { Injectable } from '@angular/core';
import { RealmService } from './realm/realm.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private realm: RealmService) {}

  download() {
    const currentRealm = this.realm.getCurrentRealm();
    var data = JSON.stringify(currentRealm);
    const dateFileName = this.getDateString();
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/json;charset=UTF-8,' + encodeURIComponent(data)
    );
    element.setAttribute(
      'download', `${currentRealm.name}_${dateFileName}.json`
    );
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  getDateString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    const hours = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');
    const miliseconds = `${date.getMilliseconds()}`.padStart(3, '0');
    return `${year}${month}${day}_${hours}${minutes}${seconds}${miliseconds}`;
  }
}
