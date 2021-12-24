import { Component, OnInit } from '@angular/core';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { InputService } from 'src/app/shared/input.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { SceneDesign3D, SceneImage } from '../../../../../server/src/events.model';
import { Design3dService} from '../design3d.service';

@Component({
  selector: 'app-design3d-library',
  templateUrl: './design3d-library.component.html',
  styleUrls: ['./design3d-library.component.scss']
})
export class Design3dLibraryComponent implements OnInit {
  current: SceneDesign3D;
  mouseOverDesign3D: string;

  preview: string;
  designs3D: SceneDesign3D[];
  constructor(
    private service: Design3dService,
    private confirm: ConfirmService,
    private notify: NotifyService,
    private input: InputService,
  ) {}

  ngOnInit(): void {
    this.service.onUpdate.subscribe((designs3d) => {
      this.designs3D = designs3d;
      this.preSelect();
    });
  }

  preSelect() {
    if( this.designs3D && this.designs3D.length > 0){
      this.select(this.designs3D[0]);
    }
  }

  select(image: SceneDesign3D) {
    this.service.select(image);
    console.log('select', image);
    this.input.focus();
  }

  mouseOver(name: string) {
    console.log('mouseover', name);
    this.mouseOverDesign3D = name;
  }

  getComponentSelectionColor(name:string) {
    const current = this.service.getCurrent();
    if (current && name == current.name) {
      return "primary";
    } else {
      return "";
    }
  }

  newDesign3D(file: File) {
    this.service.fileInputToBase64(file).subscribe((base64) => {
      this.preview = base64;
    });
  }

  async delete(name: string) {
    if( this.service.canRemove(name)){
      const response = await this.confirm.confirm([
        'Do you want to remove this Design3D?',
        'There is no going back from here...',
      ]);
  
      if (response == ConfirmOptions.YES) {
        this.service.remove(name);
      }
    } else {
      this.notify.info('This design is in use, we can\'t delete it.');
    }
  }
}
