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

const uniqueNameConfig: Config = {
  dictionaries: [adjectives, colors, animals, names],
  length: 3,
};

const REALMLIST = 'realm-list';

export class Realm {
  _id: string;
  name: string;
}

export class RealmList {
  _id: string;
  currentRealm: string;
  realms: Realm[];
}

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
    } catch(error){
      if (error.status == 404) {
        console.warn('[SFW] Realm list is not here, will create', error);
        await this.createDefaultRealmList();
      }
    }
  }

  async createDefaultRealmList() {
    try {
      const realmList = this.defaultRealmList();
      console.log('[SFW] Realm list to be created', realmList);
      
      const created = await this.updateRealms(realmList);
      console.log('[SFW] Realm list created', created);
      
      const firstRealm = await this.updateRealm(realmList.realms[0]);
      console.log('[SFW] First realm created', firstRealm);

    } catch(error){
      console.error(
        'Something really bad happened when trying to create the realm',
        error
      );
    }
  }

  defaultRealmList(): RealmList {
    const realm = this.newRealm();
    const result = <RealmList>{
      _id: REALMLIST,
      currentRealm: realm._id,
      realms: [realm],
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

  newRealm(): Realm {
    const result = <Realm>{
      _id: uuidv4(),
      name: uniqueNamesGenerator(uniqueNameConfig),
    };

    return result;
  }
}
