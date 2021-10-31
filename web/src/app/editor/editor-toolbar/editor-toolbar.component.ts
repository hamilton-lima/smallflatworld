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
  library: Library;
  readonly DEFAULT_LIBRARY = 'kenney/city-kit-urban-1';

  constructor(
    private service: EditorLibraryService,
    private editor: EditorService
  ) {}

  ngOnInit(): void {
    this.libraries = this.service.getLibraries();
    this.selectLibrary(this.DEFAULT_LIBRARY);
  }

  use(component: LibraryComponent) {
    this.editor.setCurrent(component);
  }

  getLibraryByName(name: string) {
    for (let library of this.libraries) {
      if (library.name == name) {
        return library;
      }
    }
    return null;
  }

  selectLibrary(selection: string) {
    this.library = this.getLibraryByName(selection);
    this.preSelectComponent();
  }

  // Pre select the first item
  preSelectComponent() {
    if (
      this.library &&
      this.library.components &&
      this.library.components.length > 0
    ) {
      this.use(this.library.components[0]);
    }
  }

  getSelectedClass(component) {
    const current = this.editor.getCurrent();
    if (current && current.name == component) {
      return 'selected';
    } else {
      return '';
    }
  }
}
