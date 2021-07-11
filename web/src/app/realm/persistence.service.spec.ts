import { TestBed } from '@angular/core/testing';

import { DB_NAME, PersistenceService } from './persistence.service';
import * as PouchDB from 'pouchdb/dist/pouchdb';

fdescribe('PersistenceService', () => {
  let service: PersistenceService;

  beforeEach((done) => {
    TestBed.configureTestingModule({});

    // clear all preexisting database data
    const db = new PouchDB(DB_NAME);
    db.destroy().then((err, response) => {
      console.log(err, response);
      service = TestBed.inject(PersistenceService);
      done();
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('db should be initialized after service is created', () => {
    expect(service.db).toBeTruthy();
  });

  it('db name should use constant', (done) => {
    const info = service.db.info().then((info) => {
      console.warn('info', info);
      expect(info.db_name).toBe(DB_NAME);
      done();
    });
  });

  it('healthCheck should create realmlist and default values', (done) => {
    const info = service.healthCheck().then((list) => {
      expect(list).toBeTruthy();
      expect(list._id).toBeTruthy();
      expect(list.currentRealm).toBeTruthy();
      expect(list.realms).toBeTruthy();
      expect(list.realms.length).toBe(1);
      expect(list.realms[0]._id).toBe(list.currentRealm);
      expect(list.realms[0].name).toBeTruthy();

      done();
    });
  });
});
