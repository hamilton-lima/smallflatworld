import { Component, OnInit } from '@angular/core';
import { CubeMapToSphericalPolynomialTools } from '@babylonjs/core';
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
  selected: LibraryComponent[];

  constructor(
    private service: EditorLibraryService,
    private editor: EditorService
  ) {}

  ngOnInit(): void {
    this.libraries = this.service.getLibraries();
    this.selected = this.libraries[0].components;
  }

  // REPLACE with Library component
  use(component: LibraryComponent) {
    this.editor.setCurrent(component);
  }

  selectedLibrary(selection){
    console.log('selected', selection);
    this.selected = selection.value;
  }
}