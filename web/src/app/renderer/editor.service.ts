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

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  setup(scene: Scene): Scene {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          console.log('pointerinfo', pointerInfo.pickInfo.pickedPoint);
          const position = pointerInfo.pickInfo.pickedPoint;
        }
      }
    });

    return scene;
  }

  constructor() {}
}
