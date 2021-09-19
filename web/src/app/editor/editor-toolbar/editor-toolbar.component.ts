import { Component, OnInit } from '@angular/core';
import { Library } from '../editor-library.model';
import { EditorLibraryService } from '../editor-library.service';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss'],
})
export class EditorToolbarComponent implements OnInit {
  libraries: Library[];
  constructor(private service: EditorLibraryService) {}

  ngOnInit(): void {
    this.libraries = this.service.getLibraries();
  }

  // REPLACE with Library component
  use(library: Library){
    console.log("library", library);
  }
}
