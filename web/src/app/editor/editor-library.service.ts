import { Injectable } from '@angular/core';
import { Library } from './editor-library.model';
import { kenneyLibrary} from './kenney.library';

@Injectable({
  providedIn: 'root',
})
export class EditorLibraryService {
  constructor() {}

  getLibraries(): Library[] {
    return kenneyLibrary;
  }
}
