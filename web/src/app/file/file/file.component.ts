import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';
import { RealmUploadService } from 'src/app/realm/realm-upload.service';
import { RealmService } from 'src/app/realm/realm.service';
import { FileService } from '../file.service';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  constructor(
    private file: FileService,
    private input: InputService,
    private uploadService: RealmUploadService,
    private realm: RealmService,
    private confirm: ConfirmService
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
      this.realm.createRealm();
      this.input.focus();
    }
  }
}
