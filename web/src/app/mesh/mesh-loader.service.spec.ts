import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { MeshLoaderService } from './mesh-loader.service';

describe('MeshLoaderService', () => {
  let service: MeshLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(MeshLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
