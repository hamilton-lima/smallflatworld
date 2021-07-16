import { TestBed } from '@angular/core/testing';

import { RealmUploadService } from './realm-upload.service';

describe('RealmUploadService', () => {
  let service: RealmUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealmUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
