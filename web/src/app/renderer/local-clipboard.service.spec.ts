import { TestBed } from '@angular/core/testing';

import { LocalClipboardService } from './local-clipboard.service';

describe('LocalClipboardService', () => {
  let service: LocalClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
