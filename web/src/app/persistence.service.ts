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
  id: string;
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
    console.log('Local database', this.db);
  }

  healthCheck() {
    this.getRealmList().then(
      (realmList) => {
        console.log('[SFW] Realm list', realmList);
      },
      (reject) => {
        if (reject.status == 404) {
          console.warn('[SFW] Realm list is not here, will create', reject);
          const realmList = this.getDefaultRealmList();
          console.log('[SFW] realmlist to be created', realmList);
          this.updateRealms(realmList).then(
            (result) => {
              console.log('[SFW] Realm created with success', result);
            },
            (reject) => {
              console.error(
                'Something really bad happened when trying to create the realm',
                reject
              );
            }
          );
        }
      }
    );

    console.log('[SFW] Fine. everything is fine.');
  }

  getDefaultRealmList(): RealmList {
    const result = <RealmList>{
      _id: REALMLIST,
      currentRealm: null,
      realms: []
    }
    return result;
  }

  getRealmList(): Promise<Realm[]> {
    return this.db.get(REALMLIST);
  }

  updateRealms(realmList: RealmList) {
    return this.db.put(REALMLIST, realmList);
  }

  // getEnvironment(): Promise<Environment> {
  //   return this.db.get(ENVIRONMENT);
  // }

  // addRealm(): Promise<Realm> {
  //   this.getRealms().then( (realms: Realm[])=>{
  //     const realm = new Realm();
  //     realm.id = uuidv4();
  //     realm.name = uniqueNamesGenerator(uniqueNameConfig);
  //     realms.push(realm);
  //     return this.updateRealms(realms);
  //   })
  // }
}
