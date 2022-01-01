import { TestBed } from '@angular/core/testing';

import { CodeLibraryService } from './code-library.service';

describe('CodeLibraryService', () => {
  let service: CodeLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
