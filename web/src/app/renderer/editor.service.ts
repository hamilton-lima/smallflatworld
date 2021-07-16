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
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';
import { mesh2SceneElement } from './builders';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  constructor(private mesh: MeshService, private realm: RealmService) {}

  setup(scene: Scene): Scene {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          const position = pointerInfo.pickInfo.pickedPoint;
          position.y = 1;
          const mesh = this.mesh.addTallbox(scene, position, uuidv4());
          const element = mesh2SceneElement(mesh);
          this.realm.add(element);
        }
      }
    });

    return scene;
  }
}
