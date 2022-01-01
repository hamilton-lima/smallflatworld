import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LibraryComponent } from 'src/app/editor/editor-library.model';
import { EditorService } from 'src/app/editor/editor.service';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { InputService } from 'src/app/shared/input.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { SceneDesign3D } from '../../../../../colyseus-server/src/room.state';
import { Design3dService } from './design3d.service';

@Component({
  selector: 'app-design3d-library',
  templateUrl: './design3d-library.component.html',
  styleUrls: ['./design3d-library.component.scss']
})
export class Design3dLibraryComponent implements OnInit {
  current: SceneDesign3D;
  mouseOverDesign3D: string;
  columns: string[] = ['name', 'delete'];

  preview: string;
  designs3D: BehaviorSubject<SceneDesign3D[]>;

  constructor(
    private service: Design3dService,
    private confirm: ConfirmService,
    private notify: NotifyService,
    private input: InputService,
    private editor: EditorService,
  ) { 
    this.designs3D = new BehaviorSubject<SceneDesign3D[]>([]);
  }

  ngOnInit(): void {
    this.service.onUpdate.subscribe((designs3d) => {
      console.log('designs3d', designs3d);
      this.designs3D.next(designs3d);
    });
  }

  select(design3D: SceneDesign3D) {
    this.service.select(design3D);
    console.log('select', design3D);
    this.input.focus();

    const libraryComponent = <LibraryComponent>{
      id: design3D.name,
      name: design3D.name,
      model3D: design3D.base64,
      scale: 1.0,
    }

    this.editor.setCurrentComponent(libraryComponent);
  }

  mouseOver(name: string) {
    console.log('mouseover', name);
    this.mouseOverDesign3D = name;
  }

  getComponentSelectionColor(name: string) {
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

  async delete(design3D: SceneDesign3D) {
    if (this.service.canRemove(design3D.name)) {
      const response = await this.confirm.confirm([
        'Do you want to remove this Design3D?',
        'There is no going back from here...',
      ]);

      if (response == ConfirmOptions.YES) {
        this.service.remove(design3D);
      }
    } else {
      this.notify.info('This design is in use, we can\'t delete it.');
    }
  }
}
