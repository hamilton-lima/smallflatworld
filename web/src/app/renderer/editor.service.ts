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
import { MeshService } from './mesh.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor(private mesh: MeshService) {}

  setup(scene: Scene): Scene {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          console.log('pointerinfo', pointerInfo.pickInfo.pickedPoint);
          const position = pointerInfo.pickInfo.pickedPoint;
          position.y = 1;
          this.mesh.addTallbox(scene, position);
        }
      }
    });

    return scene;
  }
}
