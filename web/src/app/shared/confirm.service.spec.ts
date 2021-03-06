import { TestBed } from '@angular/core/testing';
import { ConfirmService } from './confirm.service';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

describe('ConfirmService', () => {
  let service: ConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(ConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
