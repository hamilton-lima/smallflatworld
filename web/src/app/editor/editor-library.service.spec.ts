import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { EditorLibraryService } from './editor-library.service';

describe('EditorLibraryService', () => {
  let service: EditorLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(EditorLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
