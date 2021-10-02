import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodingService {
  public onEdit:Subject<string> = new Subject();

  edit(uuid:string){
    this.onEdit.next(uuid);
  }
}
