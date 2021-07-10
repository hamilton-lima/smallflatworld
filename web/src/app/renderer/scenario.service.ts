import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  StandardMaterial,
  MeshBuilder,
  FollowCamera,
  Camera,
  Vector3,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {

  setup(scene: Scene){
    const ground = MeshBuilder.CreateGround("ground", {width:1000, height:1000}, scene);
    const material = new StandardMaterial('ground-material', scene);

    material.diffuseColor = Color3.FromHexString("#7C6650");
    ground.material = material;

    return ground;
  }

}
