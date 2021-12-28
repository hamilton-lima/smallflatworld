import { TestBed } from '@angular/core/testing';
import { PersistenceService } from './persistence.service';
import { APP_TESTBED_MODULE } from '../app.testbed';

describe('PersistenceService', () => {
  let service: PersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();

    service = TestBed.inject(PersistenceService);
  });

  afterEach(() => {
    console.log('delete database');
    service.db.delete();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('db should be initialized after service is created', () => {
    expect(service.db).toBeTruthy();
  });

});
