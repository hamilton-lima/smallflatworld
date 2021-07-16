import { TestBed } from '@angular/core/testing';

import { DB_NAME, PersistenceService } from './persistence.service';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import { Realm } from './persistence.model';

describe('PersistenceService', () => {
  let service: PersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenceService);
  });

  afterEach((done) => {
    // service.db.destroy().then((err, response) => {
    //   console.log('destroying the database', err);
    //   done();
    // });
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

  it('ready() should create realmlist and default values', (done) => {
    const info = service.ready().then((list) => {
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

  it('updateRealm should save empty array', async (done) => {
    try {
      const ready = await service.ready();

      const realm = <Realm>{
        _id: 'test-id',
        name: 'test-name',
        elements: [],
      };

      const result = await service.updateRealm(realm);
      console.log('testing update realm, result of update call', result);
      const saved = await service.getRealm(realm._id);

      expect(saved._id).toBeTruthy();
      expect(saved.name).toBeTruthy();
      expect(saved.elements).toBeTruthy();
      expect(saved.elements.length).toBe(0);
      done();
    } catch (error) {
      console.error('error testing updateRealm for empty array', error);
      fail('error when testing update realm');
      done();
    }
  });
});
