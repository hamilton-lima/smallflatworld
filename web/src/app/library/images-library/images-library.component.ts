import { Component, OnInit } from '@angular/core';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { InputService } from 'src/app/shared/input.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { SceneImage } from '../../../../../colyseus-server/src/events.model';
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
    private confirm: ConfirmService,
    private notify: NotifyService,
    private input: InputService,
  ) {}

  ngOnInit(): void {
    this.service.onUpdate.subscribe((images) => {
      this.images = images;
      this.preSelectImage();
    });
  }

  preSelectImage() {
    if( this.images && this.images.length > 0){
      this.select(this.images[0]);
    }
  }

  select(image: SceneImage) {
    this.service.select(image);
    console.log('select', image);
    this.input.focus();
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
    if( this.service.canRemove(name)){
      const response = await this.confirm.confirm([
        'Do you want to remove this image?',
        'There is no going back from here...',
      ]);
  
      if (response == ConfirmOptions.YES) {
        this.service.remove(name);
      }
    } else {
      this.notify.info('Some block is USING this image, we can\'t delete it.');
    }
  }
}
