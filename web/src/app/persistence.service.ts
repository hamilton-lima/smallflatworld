import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
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

const REALM = 'realm';
const ENVIRONMENT = 'environment';

export class Realm {
  id: string;
  name: string;
}

export class RealmList {}

export class Environment {
  currentRealm: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  db: PouchDB.Database;

  constructor() {
    this.db = new PouchDB('smallflatworld');
    console.log('persistenc service', this.db);
  }

  // getRealms(): Promise<Realm[]> {
  //   return this.db.get(REALM);
  // }

  // updateRealms(realms: Realm[]) {
  //   return this.db.put(REALM, realms);
  // }

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
