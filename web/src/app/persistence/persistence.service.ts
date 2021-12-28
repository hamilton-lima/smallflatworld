import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
  names,
} from 'unique-names-generator';
import { Configuration } from './persistence.model';
import Dexie from 'dexie';
import { PersistenceDataChecker } from './persistence.data-checker';
import { Realm } from "../../../../server/src/events.model";

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
    console.log('creating local database', DB_NAME);

    super(DB_NAME);
    // defines indexed fields of the entities
    this.version(1).stores({
      realms: 'id,&name',
      configuration: 'id',
    });
    this.realms = this.table('realms');
    this.configuration = this.table('configuration');

    this.realms.mapToClass(Realm);
    this.configuration.mapToClass(Configuration);
    console.log('local database created', DB_NAME);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  db: LocalDatabase;

  constructor(private dataChecker: PersistenceDataChecker) {
    this.db = new LocalDatabase();
  }

  // check for readiness of the data, add default values if empty
  async ready(): Promise<void> {
    try {
      await this.defaultRealm();
      await this.defaultConfiguration();
    } catch (error) {
      console.error(
        'Error when initializing default values for the database',
        error
      );
    }
  }

  // create an empty realm if none exists
  async defaultRealm() {
    const realms = await this.db.realms.toArray();
    console.info('default realm found', realms);

    console.log('realms', realms);
    if (realms.length == 0) {
      const realm = this.buildRealm();
      const add = await this.db.realms.add(realm);
      console.info('default realm created', realm, add);
    }
  }

  // add default configuration if does not exist
  async defaultConfiguration() {
    const configuration = await this.db.configuration.toArray();
    console.info('default configuration found', configuration);
    if (configuration.length == 0) {
      const realm = await this.getLastRealm();
      const configuration = <Configuration>{
        id: uuidv4(),
        currentRealm: realm.id,
      };
      const add = await this.db.configuration.add(configuration);
      console.info('default configuration created', configuration, add);
    }
  }

  async checkRealm(realm: Realm): Promise<Realm> {
    const check = this.dataChecker.realmCheck(realm);
    if (check.updated) {
      const updated = await this.updateRealm(<Realm>check.updated);
      return <Realm>check.updated;
    }
    return <Realm>check.original;
  }

  async getRealm(id: string) {
    const realm = await this.db.realms.where('id').equals(id).toArray();
    return this.checkRealm(realm[0]);
  }

  async getConfiguration() {
    const configurations = await this.db.configuration.toCollection().toArray();
    return configurations[0];
  }

  // last realm in the database to be used in the configuration
  private async getLastRealm() {
    const realm = await this.db.realms.toCollection().last();
    return this.checkRealm(realm);
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
      images: [],
      audios: [],
      codes: [],
      designs3D: []
    };

    return result;
  }

}
