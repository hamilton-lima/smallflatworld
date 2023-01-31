import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
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
    private formBuilder: UntypedFormBuilder,
    public service: ClientService
  ) {}

  ngOnInit(): void {}

  join() {
    const realmUUID = this.form.get('realmUUID').value;
    console.log('join', realmUUID);
    this.service.join(realmUUID);
  }
}
