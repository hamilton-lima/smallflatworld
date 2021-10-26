import { Component, OnInit } from '@angular/core';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { SceneImage } from '../../../../../server/src/events.model';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images-library',
  templateUrl: './images-library.component.html',
  styleUrls: ['./images-library.component.scss'],
})
export class ImagesLibraryComponent implements OnInit {
  current: SceneImage;
  mouseOverImage: string;

  preview: string;
  images: SceneImage[];
  constructor(
    private service: ImagesService,
    private confirm: ConfirmService
  ) {}

  ngOnInit(): void {
    this.service.onUpdate.subscribe((images) => (this.images = images));
  }

  select(image: SceneImage) {
    this.service.select(image);
    console.log('select', image);
  }

  mouseOver(name: string) {
    console.log('mouseover', name);
    this.mouseOverImage = name;
  }

  getComponentSelectionColor(name:string) {
    const current = this.service.getCurrent();
    if (current && name == current.name) {
      return "primary";
    } else {
      return "";
    }
  }

  newImage(file: File) {
    this.service.fileInputToBase64(file).subscribe((base64) => {
      this.preview = base64;
    });
  }

  async delete(name: string) {
    const response = await this.confirm.confirm([
      'Do you want to remove this image?',
      'There is no going back from here...',
    ]);

    if (response == ConfirmOptions.YES) {
      this.service.remove(name);
    }
  }
}