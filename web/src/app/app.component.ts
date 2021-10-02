import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from './file/file.service';
import { RealmService } from './realm/realm.service';
import { InputService } from './input.service';
import { RealmUploadService } from './realm/realm-upload.service';
import { ServerService } from '../app/multiplayer/server.service';
import { MatDrawer } from '@angular/material/sidenav';
import { CodeEditorEvent } from './coding/code-blockly/code-blockly.component';
import { CodingService } from './coding/coding.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ready = false;
  name = '';

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('drawerRight') drawerRight: MatDrawer;

  constructor(
    private realm: RealmService,
    private input: InputService,
    private coding: CodingService
  ) {}

  ngOnInit(): void {
    this.realm.ready().then(
      () => {
        this.ready = true;
        this.name = this.realm.getCurrentRealm().name;
      },
      (error) => {
        console.error('Something happened when initializing the system', error);
      }
    );

    this.coding.onEdit.subscribe(() => this.toggleRight());
  }

  toggleRight(): void {
    this.drawerRight.open();
  }

  toggle() {
    this.drawer.toggle();
    this.input.focus();
  }
}
