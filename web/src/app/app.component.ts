import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
import { RealmService } from './realm/realm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'web';
  ready = false;
  constructor(private file: FileService, private realm: RealmService){
  }
  ngOnInit(): void {
    this.realm.ready().then( ()=>{
      this.ready = true;
    }, (error)=>{
      console.error('Something happened when initializing the system', error);
    });
  }

  download(){
    this.file.download();
  }
}
