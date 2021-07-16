import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { InputService } from '../input.service';
import { RealmUploadComponent } from './realm-upload/realm-upload.component';

@Injectable({
  providedIn: 'root'
})
export class RealmUploadService {

  constructor(private dialog: MatDialog,     private input: InputService,
    ) {}

  openDialog() {
  }
  show(){
    const dialogRef = this.dialog.open(RealmUploadComponent, {minWidth: 500});

    dialogRef.afterClosed().subscribe(result => {
      this.input.focus();
    });

  }
}
