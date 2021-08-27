import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  constructor(private service: ShareService) {}

  ngOnInit(): void {}

  start() {
    console.log('start');
    this.service.start();
  }

  stop() {
    console.log('stop');
    this.service.stop();
  }
}
