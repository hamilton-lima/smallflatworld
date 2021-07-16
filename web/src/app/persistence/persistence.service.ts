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
import { Realm, Configuration } from './persistence.model';
import Dexie from 'dexie';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';

const uniqueNameConfig: Config = {
  dictionaries: [adjectives, colors, animals, names],
  length: 3,
};

export const REALMLIST = 'realm-list';
export const DB_NAME = 'smallflatworld-dexie';

class LocalDatabase extends Dexie {
  public realms: Dexie.Table<Realm, number>;
  public configuration: Dexie.Table<Configuration, number>;

  public constructor() {
    super(DB_NAME);
    this.version(1).stores({
      realms: 'id,&name',
      configuration: 'id',
    });
    this.realms = this.table('realms');
    this.configuration = this.table('configuration');

    this.realms.mapToClass(Realm);
    this.configuration.mapToClass(Configuration);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  db: LocalDatabase;

  constructor(private logger: NgxFancyLoggerService) {
    this.db = new LocalDatabase();
  }

  // check for readiness of the data, add default values if empty
  async ready(): Promise<void> {
    try {
      await this.defaultRealm();
      await this.defaultConfiguration();
    } catch (error) {
      this.logger.error('Error when initializing default values for the database', error);
    }
  }

  async getRealm(id: string) {
    const realm = await this.db.realms.where('id').equals(id).toArray();
    return realm[0];
  }

  async getConfiguration() {
    const configurations = await this.db.configuration.toCollection().toArray();
    return configurations[0];
  }

  // create an empty realm if none exists
  async defaultRealm() {
    const realms = await this.db.realms.toArray();
    if (realms.length == 0) {
      const realm = this.buildRealm();
      const add = await this.db.realms.add(realm);
    }
  }

  // add default configuration if does not exist
  async defaultConfiguration() {
    const configuration = await this.db.configuration.toArray();
    if (configuration.length == 0) {
      const realm = await this.getLastRealm();
      const configuration = <Configuration>{
        currentRealm: realm.id,
      };
      const add = await this.db.configuration.add(configuration);
    }
  }

  // last realm in the database to be used in the configuration
  private getLastRealm() {
    return this.db.realms.toCollection().last();
  }

  // add or create realm
  updateRealm(realm: Realm) {
    return this.db.realms.put(realm);
  }

  // add or remove configuration
  updateConfiguration(configuration: Configuration) {
    return this.db.configuration.put(configuration);
  }

  // builds new Realm object
  buildRealm(): Realm {
    const result = <Realm>{
      id: uuidv4(),
      name: uniqueNamesGenerator(uniqueNameConfig),
      elements: [],
    };

    return result;
  }
}
