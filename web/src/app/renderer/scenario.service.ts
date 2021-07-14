import { Injectable } from '@angular/core';
import {
  Scene,
  Color3,
  StandardMaterial,
  MeshBuilder,
} from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { MeshService } from './mesh.service';
import { EngineState } from './renderer.model';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  constructor(private mesh: MeshService, private realm: RealmService) {}
  
  buildRealm(engineState: EngineState):Promise<void> {
    return new Promise( (resolve,reject)=>{
      this.realm.getCurrentRealm().elements.forEach( (element)=>{
        console.log('loading', element);
      });
      resolve();
    });
  }

  setup(scene: Scene){
    const ground = MeshBuilder.CreateGround("ground", {width:1000, height:1000}, scene);
    const material = new StandardMaterial('ground-material', scene);

    material.diffuseColor = Color3.FromHexString("#7C6650");
    ground.material = material;

    return ground;
  }

}
