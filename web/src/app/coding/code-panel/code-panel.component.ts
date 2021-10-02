import { Component, OnInit } from '@angular/core';
import { CodeEditorEvent } from '../code-blockly/code-blockly.component';
import { CodingService } from '../coding.service';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.scss'],
})
export class CodePanelComponent implements OnInit {
  selected: string;
  constructor(private coding: CodingService) {}

  ngOnInit(): void {
    this.coding.onEdit.subscribe((selected)=>{
      this.selected = selected;
    })
  }

  changed(event: CodeEditorEvent) {
    console.log('code', event);
  }
}
