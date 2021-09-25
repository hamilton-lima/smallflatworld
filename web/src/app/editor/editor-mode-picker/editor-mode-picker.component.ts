import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';
import { EditorModeService } from '../editor-mode.service';

@Component({
  selector: 'app-editor-mode-picker',
  templateUrl: './editor-mode-picker.component.html',
  styleUrls: ['./editor-mode-picker.component.scss']
})
export class EditorModePickerComponent implements OnInit {

  constructor(private input: InputService, private service: EditorModeService) { }

  ngOnInit(): void {
  }

  add(){
    this.input.focus();
    this.service.add();
  }

  edit(){
    this.input.focus();
    this.service.edit();
  }

}
