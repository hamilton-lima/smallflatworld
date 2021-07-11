import { Component } from '@angular/core';
import { PersistenceService } from './persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  constructor(private persistence: PersistenceService){
    persistence.healthCheck();
  }
}
