import { TestBed } from '@angular/core/testing';

import { InternalLibraryFactoryService } from './internal-library-factory.service';

describe('InternalLibraryFactoryService', () => {
  let service: InternalLibraryFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalLibraryFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
