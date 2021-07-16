import { TestBed } from '@angular/core/testing';
import { PersistenceService } from '../persistence/persistence.service';

import { RealmService } from './realm.service';

describe('RealmService', () => {
  let service: RealmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('after setup is done objects should be available', (done) => {
    const info = service.ready().then(() => {
      
      const list = service.getRealmList();
      expect(list).toBeTruthy();
      expect(list._id).toBeTruthy();
      expect(list.currentRealm).toBeTruthy();
      expect(list.realms).toBeTruthy();
      expect(list.realms.length).toBe(1);
      expect(list.realms[0]._id).toBe(list.currentRealm);
      expect(list.realms[0].name).toBeTruthy();

      const realm = service.getCurrentRealm();
      expect(realm).toBeTruthy();
      expect(realm._id).toBeTruthy();
      expect(realm.name).toBeTruthy();
      expect(realm.elements).toBeTruthy();
      expect(realm.elements.length).toBe(0);

      done();
    });
  });
});
