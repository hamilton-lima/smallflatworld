import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RealmUploadComponent } from './realm-upload/realm-upload.component';

@Injectable({
  providedIn: 'root'
})
export class RealmUploadService {

  constructor(private dialog: MatDialog) {}

  openDialog() {
  }
  show(){
    const dialogRef = this.dialog.open(RealmUploadComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
