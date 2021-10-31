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

  readonly PRE_SELECT_LIBRARY = 'internal/basic';
  readonly PRE_SELECT_COMPONENT = 'cube';

  constructor(
    private service: EditorLibraryService,
    private editor: EditorService
  ) {}

  ngOnInit(): void {
    this.libraries = this.service.getLibraries();
    this.preSelectComponent(this.PRE_SELECT_LIBRARY, this.PRE_SELECT_COMPONENT);
  }

  preSelectComponent(libraryName: string, componentName: string) {
    const library = this.getLibraryByName(libraryName);
    if (library) {
      const found = library.components.find(
        (component) => component.name == componentName
      );
      if (found) {
        this.use(found);
      } else {
        console.warn(
          'Component not found when pre-selecting',
          libraryName,
          componentName
        );
      }
    } else {
      console.warn('Library not found when pre-selecting', libraryName);
    }
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

  getSelectedClass(component) {
    const current = this.editor.getCurrent();
    if (current && current.name == component) {
      return 'selected';
    } else {
      return '';
    }
  }
}
