import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';
import { RealmService } from './realm.service';

describe('RealmService', () => {
  let service: RealmService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(RealmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('after setup is done objects should be available', (done) => {
    const info = service.ready().then(() => {
      const realm = service.getCurrentRealm();
      expect(realm).toBeTruthy();
      expect(realm.name).toBeTruthy();
      expect(realm.elements).toBeTruthy();

      done();
    });
  });
});
