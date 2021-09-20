import { Component, OnInit } from '@angular/core';
import { Library, LibraryComponent } from '../editor-library.model';
import { EditorLibraryService } from '../editor-library.service';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
})
export class EditorToolbarComponent implements OnInit {
  libraries: Library[];
  constructor(
    private service: EditorLibraryService,
    private editor: EditorService
  ) {}

  ngOnInit(): void {
    this.libraries = this.service.getLibraries();
  }

  // REPLACE with Library component
  use(component: LibraryComponent) {
    console.log('component', component);
    this.editor.setCurrent(component);
  }
}
