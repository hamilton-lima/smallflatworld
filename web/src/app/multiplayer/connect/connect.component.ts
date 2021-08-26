import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit {
  constructor(private server: ServerService) {}

  ngOnInit(): void {
    // connects to the local server to test
    this.server.connect('ws://localhost:8080/').subscribe((connected) => {
      console.log('connected', connected);
    });
  }
}
