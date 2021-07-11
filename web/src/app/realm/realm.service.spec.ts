import { TestBed } from '@angular/core/testing';
import { PersistenceService } from './persistence.service';

import { RealmService } from './realm.service';

fdescribe('RealmService', () => {
  let service: RealmService;

  beforeEach((done) => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealmService);
    let persistence = TestBed.inject(PersistenceService);
    
    persistence.ready().then(
      () => {
        done();
      },
      (error) => {
        console.error(
          'Error when checking for readiness of persistence service',
          error
        );
      }
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('healthCheck should create realmlist and default values', (done) => {
  //   const info = service.healthCheck().then((list) => {
  //     expect(list).toBeTruthy();
  //     expect(list._id).toBeTruthy();
  //     expect(list.currentRealm).toBeTruthy();
  //     expect(list.realms).toBeTruthy();
  //     expect(list.realms.length).toBe(1);
  //     expect(list.realms[0]._id).toBe(list.currentRealm);
  //     expect(list.realms[0].name).toBeTruthy();

  //     done();
  //   });
  // });
});
