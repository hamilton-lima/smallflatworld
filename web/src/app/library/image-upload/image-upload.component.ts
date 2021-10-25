import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageUploadComponent,
      multi: true,
    },
  ],
})
export class ImageUploadComponent {
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
