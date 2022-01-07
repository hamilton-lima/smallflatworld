import { Realm } from 'src/app/realm/realm.model';

export class GunClient{
  
  // TODO: a type would be lovely... ;)
  gun: any;
  constructor(gun: any) { 
    this.gun = gun;
  }

  share(realm: Realm, characterID: string){
  // TODO: map realm to sequence of get()/put() using gun

  }

  join(uuid: string, characterID: string){
    // create necessary Subjects to trigger events on udpates
  }
}
