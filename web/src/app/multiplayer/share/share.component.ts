import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(private service: ClientService) {}

  ngOnInit(): void {}

  start() {
    console.log('start');
    this.service.share();
  }

  stop() {
    console.log('stop');
    this.service.stopShare();
  }
}
