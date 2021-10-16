import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confim-dialog',
  templateUrl: './confim-dialog.component.html',
  styleUrls: ['./confim-dialog.component.scss']
})
export class ConfimDialogComponent implements OnInit {
  message: string;
  constructor() { 
    this.message = "nothing to see here";
  }

  ngOnInit(): void {
  }

}
