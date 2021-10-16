import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ConfimDialogComponent,
  ConfirmDialogData,
} from './confim-dialog/confim-dialog.component';
export enum ConfirmOptions {
  YES = 'yes',
  NO = 'no',
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  constructor(public dialog: MatDialog) {}

  async confirm(messages: string[]): Promise<ConfirmOptions> {
    return new Promise<ConfirmOptions>((resolve, reject) => {
      const data = <ConfirmDialogData>{
        messages: messages,
      };
      const config = <MatDialogConfig>{
        data: data,
      };

      const dialogRef = this.dialog.open(ConfimDialogComponent, config);
      dialogRef.afterClosed().subscribe(
        (result) => resolve(result),
        (error) => reject(error)
      );
    });
  }
}
