import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class ConfirmDialogData {
  messages: string[];
}

@Component({
  selector: 'app-confim-dialog',
  templateUrl: './confim-dialog.component.html',
  styleUrls: ['./confim-dialog.component.scss'],
})
export class ConfimDialogComponent implements OnInit {
  messages: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

  ngOnInit(): void {
    this.messages = this.data.messages;
  }
}
