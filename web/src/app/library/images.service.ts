import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  // REMOVE THIS
  last: string;
  constructor() {
    // REMOVE THIS
    this.last = localStorage.getItem('lastImage');
  }

  fileInputToBase64(file): Subject<string> {
    const result = new Subject<string>();
    const reader = new FileReader();

    reader.onloadend = function () {
      result.next(reader.result.toString());
    };

    reader.readAsDataURL(file);
    // REMOVE this
    result.subscribe((base64) => {
      this.last = base64;
      // REMOVE THIS
      localStorage.setItem('lastImage', base64);
      console.log('image', base64);
    });
    return result;
  }
}
