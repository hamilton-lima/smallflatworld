import { TestBed } from '@angular/core/testing';
import { NotifyService } from './notify.service';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(NotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
