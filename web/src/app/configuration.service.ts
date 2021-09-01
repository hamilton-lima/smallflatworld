import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence/persistence.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  async setCurrentRealm(id: string) {
    const configuration = await this.persistence.getConfiguration();
    configuration.currentRealm = id;
    await this.persistence.updateConfiguration(configuration);
  }

  constructor(private persistence: PersistenceService) {}

  async getConfiguration() {
    return this.persistence.getConfiguration();
  }
}
