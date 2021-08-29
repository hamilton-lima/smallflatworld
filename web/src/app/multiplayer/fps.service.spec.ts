import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { FPSService } from './fps.service';

describe('FPSService', () => {
  let service: FPSService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(FPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
