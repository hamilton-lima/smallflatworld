import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { RunnerService } from './runner.service';

describe('RunnerService', () => {
  let service: RunnerService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
        service = TestBed.inject(RunnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
