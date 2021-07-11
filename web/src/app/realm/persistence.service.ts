import { Injectable } from '@angular/core';
/*
 Removed the expected import below to fix error: 'global is not defined'
 `import * as PouchDB from 'pouchdb';`
 @see for recommended import https://pouchdb.com/guides/setup-pouchdb.html#typescript
 @see for issue and fix https://github.com/pouchdb/pouchdb/issues/7263
*/
import * as PouchDB from 'pouchdb/dist/pouchdb';
import { v4 as uuidv4 } from 'uuid';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  names,
} from 'unique-names-generator';
import { Realm, RealmInfo, RealmList } from './realm.model';

const uniqueNameConfig: Config = {
  dictionaries: [adjectives, colors, animals, names],
  length: 3,
};

const REALMLIST = 'realm-list';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('smallflatworld');
  }

  async healthCheck() {
    try {
      const realmList = await this.getRealmList();
    } catch (error) {
      if (error.status == 404) {
        console.warn('[SFW] Realm list is not here, will create', error);
        await this.createDefaultRealmList();
      }
    }
  }

  async createDefaultRealmList() {
    try {
      const firstRealm = this.newRealm();
      const realmList = this.defaultRealmList(firstRealm);
      console.log('[SFW] Realm and list to be created', firstRealm, realmList);

      const created = await this.updateRealms(realmList);
      console.log('[SFW] Realm list created', created);

      const result = await this.updateRealm(firstRealm);
      console.log('[SFW] First realm created', result);

    } catch (error) {
      console.error(
        'Something really bad happened when trying to create the realm',
        error
      );
    }
  }

  defaultRealmList(firstRealm: Realm): RealmList {
    const realm = this.newRealm();
    const info = <RealmInfo>{
      _id: firstRealm._id,
      name: firstRealm.name,
    };

    const result = <RealmList>{
      _id: REALMLIST,
      currentRealm: firstRealm._id,
      realms: [info],
    };
    return result;
  }

  getRealmList(): Promise<RealmList> {
    return this.db.get(REALMLIST);
  }

  updateRealms(realmList: RealmList) {
    return this.db.put(realmList);
  }

  updateRealm(realm: Realm) {
    return this.db.put(realm);
  }

  // async getRealm(_id: string): Promise<Realm> {
  //   try {
  //     const result = await this.db.get(_id);
  //     return result;
  //   } catch (error) {
  //     if (error.status == 404) {
  //       console.error('[SFW] Realm does not exist', error);
  //       throw error;
  //     }
  //   }
  // }  
  
  async getRealm(_id: string): Promise<Realm> {
    return this.db.get(_id);
  }

  newRealm(): Realm {
    const result = <Realm>{
      _id: uuidv4(),
      name: uniqueNamesGenerator(uniqueNameConfig),
    };

    return result;
  }
}
