import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from './file.service';
import { RealmService } from './realm/realm.service';
import { InputService } from './input.service';
import { RealmUploadService } from './realm/realm-upload.service';
import { ServerService } from '../app/multiplayer/server.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web';
  ready = false;

  @ViewChild('drawer') drawer: MatDrawer;

  constructor(
    private file: FileService,
    private realm: RealmService,
    private input: InputService,
    private uploadService: RealmUploadService,
    private server: ServerService
  ) {}
  ngOnInit(): void {
    this.realm.ready().then(
      () => {
        this.ready = true;
      },
      (error) => {
        console.error('Something happened when initializing the system', error);
      }
    );

    // connects to the local server to test
    this.server.connect('ws://localhost:8080/').subscribe((connected) => {
      console.log('connected', connected);
    });
  }

  download() {
    this.file.download();
    this.input.focus();
  }

  upload() {
    this.uploadService.show();
    this.input.focus();
  }

  // sends a test message
  send() {
    const updates = this.server.share();
  }
}
