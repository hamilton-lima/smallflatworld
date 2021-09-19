import { TestBed } from '@angular/core/testing';

import { EditorLibraryService } from './editor-library.service';

describe('EditorLibraryService', () => {
  let service: EditorLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
