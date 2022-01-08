import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { LocalClipboardService } from './local-clipboard.service';

describe('LocalClipboardService', () => {
  let service: LocalClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(LocalClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
