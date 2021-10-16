import { Component, OnInit, ViewChild } from '@angular/core';
import { RealmService } from './realm/realm.service';
import { InputService } from './shared/input.service';
import { MatDrawer } from '@angular/material/sidenav';
import { CodingService } from './coding/coding.service';
import { VERSION } from 'src/app/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ready = false;
  name = '';
  version = VERSION;

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

    this.coding.onEdit.subscribe((selection) => this.toggleRight(selection));
  }

  lastSelection: string;
  toggleRight(selection: string): void {
    if (selection == this.lastSelection) {
      this.drawerRight.toggle();
    } else {
      this.drawerRight.open();
    }
    this.lastSelection = selection;
  }

  toggle() {
    this.drawer.toggle();
    this.input.focus();
  }
}
