import { Injectable } from '@angular/core';
import { Configuration } from '../persistence/persistence.model';
import { PersistenceService } from '../persistence/persistence.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  async setCurrentRealm(id: string) {
    const configuration = await this.persistence.getConfiguration();
    configuration.currentRealm = id;
    await this.persistence.updateConfiguration(configuration);
  }

  constructor(private persistence: PersistenceService) { }

  async getConfiguration(): Promise<Configuration> {
    const result = await this.persistence.getConfiguration();
    if (!result.characterID) {
      result.characterID = uuidv4();
      await this.persistence.updateConfiguration(result);
    }
    return result;
  }
}
