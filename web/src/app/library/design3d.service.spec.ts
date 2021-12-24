import { TestBed } from '@angular/core/testing';

import { Design3dService } from './design3d.service';

describe('Design3dService', () => {
  let service: Design3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Design3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
