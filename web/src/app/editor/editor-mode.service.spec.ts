import { TestBed } from '@angular/core/testing';

import { EditorModeService } from './editor-mode.service';

describe('EditorModeService', () => {
  let service: EditorModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
