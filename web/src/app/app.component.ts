import { Component, OnInit } from '@angular/core';
import { PersistenceService } from './realm/persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'web';
  ready = false;
  constructor(private persistence: PersistenceService){
  }
  ngOnInit(): void {
    this.persistence.ready().then( ()=>{
      this.ready = true;
    }, (error)=>{
      console.error('Something happened when initializing the system', error);
    });
  }
}
