import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-realm-upload',
  templateUrl: './realm-upload.component.html',
  styleUrls: ['./realm-upload.component.scss'],
})
export class RealmUploadComponent {
  @ViewChild('fileInput') fileInput: ElementRef;

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {

      let reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('loaded', e.target.result);
      };
      reader.readAsText(imgFile.target.files[0]);
    } 
  }
}
