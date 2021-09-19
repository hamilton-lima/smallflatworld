import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/input.service';
import { RealmUploadService } from 'src/app/realm/realm-upload.service';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  constructor(
    private file: FileService,
    private input: InputService,
    private uploadService: RealmUploadService
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
}
