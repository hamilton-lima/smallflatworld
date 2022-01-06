import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigurationService } from 'src/app/shared/configuration.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  form = this.formBuilder.group({
    realmUUID: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    public service: ClientService,
    private configuration: ConfigurationService
  ) {}

  ngOnInit(): void {}

  async join() {
    const realmUUID = this.form.get('realmUUID').value;
    const config = await this.configuration.getConfiguration();

    console.log('join', realmUUID);
    this.service.join(realmUUID, config.characterID);
  }
}
