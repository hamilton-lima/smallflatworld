import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { Realm } from 'src/app/persistence/persistence.model';
import { RendererService } from 'src/app/renderer/renderer.service';
import { RealmService } from '../realm.service';

@Component({
  selector: 'app-realm-upload',
  templateUrl: './realm-upload.component.html',
  styleUrls: ['./realm-upload.component.scss'],
})
export class RealmUploadComponent {
  @ViewChild('fileInput') fileInput: ElementRef;

  realm: Realm;
  constructor(
    public dialogRef: MatDialogRef<RealmUploadComponent>,
    private logger: NgxFancyLoggerService,
    private realmService: RealmService,
    private renderer: RendererService
  ) {}

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      const file = imgFile.target.files[0];
      let reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          this.realm = JSON.parse(e.target.result);
        } catch (error) {
          this.logger.error('Error parsing imported file', file, error);
        }
      };
      reader.readAsText(imgFile.target.files[0]);
    }
  }

  close() {
    this.dialogRef.close();
  }

  import() {
    this.realmService.updateRealm(this.realm).then(() => {
      this.renderer.reload.next();
      this.dialogRef.close();
    });
  }
}
