import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images-library',
  templateUrl: './images-library.component.html',
  styleUrls: ['./images-library.component.scss'],
})
export class ImagesLibraryComponent implements OnInit {
  preview: string;
  constructor(private service: ImagesService) {}

  ngOnInit(): void {}

  newImage(file: File) {
    console.log('new image', file);
    this.service.fileInputToBase64(file).subscribe((base64) => {
      this.preview = base64;
    });
  }
}
