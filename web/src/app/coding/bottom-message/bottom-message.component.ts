import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { InputService } from 'src/app/shared/input.service';

export class BottomMessageData {
  messages: string[];
}

@Component({
  selector: 'app-bottom-message',
  templateUrl: './bottom-message.component.html',
  styleUrls: ['./bottom-message.component.scss']
})
export class BottomMessageComponent implements OnInit {
  messages: string[];
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomMessageData,
    private bottomSheetRef: MatBottomSheetRef<BottomMessageComponent>, private input: InputService,
  ) { }

  ngOnInit(): void {
    this.messages = this.data.messages;
  }

  close() {
    this.bottomSheetRef.dismiss();
    this.input.focus();
  }
}
