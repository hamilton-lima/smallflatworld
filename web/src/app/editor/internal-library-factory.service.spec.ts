import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { InternalLibraryFactoryService } from './internal-library-factory.service';

describe('InternalLibraryFactoryService', () => {
  let service: InternalLibraryFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(InternalLibraryFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
