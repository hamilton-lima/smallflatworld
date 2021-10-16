import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';
import { RealmUploadService } from 'src/app/realm/realm-upload.service';
import { RealmService } from 'src/app/realm/realm.service';
import { FileService } from '../file.service';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { RendererService } from 'src/app/renderer/renderer.service';

@Component({
  selector: 'app-realm-toolbar',
  templateUrl: './realm-toolbar.component.html',
  styleUrls: ['./realm-toolbar.component.scss']
})
export class RealmToolbarComponent  implements OnInit {
  constructor(
    private file: FileService,
    private input: InputService,
    private uploadService: RealmUploadService,
    private realm: RealmService,
    private confirm: ConfirmService,
    private renderer: RendererService
  ) {}

  ngOnInit(): void {}

  download() {
    this.file.download();
    this.input.focus();
  }

  upload() {
    this.uploadService.show();
    this.input.focus();
  }

  async create() {
    const response = await this.confirm.confirm([
      'This will destroy your current realm and create a new one!',
      'ARE YOU SURE?',
      '',
      '[Admin whispers]...I should download the realm before creating a new one...',
    ]);

    if (response == ConfirmOptions.YES) {
      this.realm.createRealm().then(() => {
        this.renderer.reload.next();
        this.input.focus();
      });
    }
  }
}
