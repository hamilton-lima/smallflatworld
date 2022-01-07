import { Component, OnInit } from '@angular/core';
import { RealmService } from 'src/app/realm/realm.service';
import { ConfigurationService } from 'src/app/shared/configuration.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(
    public service: ClientService,
    private realm: RealmService,
    private configuration: ConfigurationService
  ) {}

  ngOnInit(): void {}

  async start() {
    console.log('start');
    const currentRealm = this.realm.getCurrentRealm();
    const config = await this.configuration.getConfiguration();
    this.service.share(currentRealm, config.characterID);
  }

  stop() {
    console.log('stop');
    this.service.stopShare();
  }
}
