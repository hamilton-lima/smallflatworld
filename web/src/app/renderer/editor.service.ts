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
export class EditorService {
  setup(scene: Scene): Scene {

    scene.onPointerObservable.add((pointerInfo) => {
      if( pointerInfo.pickInfo.pickedPoint){
        console.log('pointerinfo', pointerInfo.pickInfo.pickedPoint);
      }
    });

    return scene;
  }

  constructor() {}
}
