import {
  Component,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
  ],
})
export class FileUploadComponent {
  file: File | null = null;
  @Output() onUpload: EventEmitter<File> = new EventEmitter();

  isDraggingOver = false;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onUpload.emit(file);
    this.file = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  @HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;

    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.onUpload.emit(file);
      this.file = file;
    }
  }
}
