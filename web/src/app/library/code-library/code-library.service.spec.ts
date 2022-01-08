import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

import { CodeLibraryService } from './code-library.service';

describe('CodeLibraryService', () => {
  let service: CodeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(CodeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
