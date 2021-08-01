import { TestBed } from '@angular/core/testing';

import { FPSService } from './fps.service';

describe('FPSService', () => {
  let service: FPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
