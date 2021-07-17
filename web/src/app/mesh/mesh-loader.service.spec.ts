import { TestBed } from '@angular/core/testing';

import { MeshLoaderService } from './mesh-loader.service';

describe('MeshLoaderService', () => {
  let service: MeshLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeshLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
