import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { FormBuilder, Validators } from '@angular/forms';

const DEFAULT_SERVER = 'ws://localhost:3000';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit {
  connected = false;

  form = this.formBuilder.group({
    url: [DEFAULT_SERVER, Validators.required],
  });

  constructor(
    private server: ServerService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

  connect() {
    const url = this.form.get('url').value;

    try {
      const connected = this.server.connect(url);
      console.log('connected', connected);
      this.connected = connected;
    } catch (error) {
      console.error('Error connecting to the server', url, error);
    }
  }

  close() {
    this.server.close();
    this.connected = false;
  }
}
