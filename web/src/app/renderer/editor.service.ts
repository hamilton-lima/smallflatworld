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
import { SceneElement } from '../realm/realm.model';
import { v4 as uuidv4 } from 'uuid';

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
          console.log('pointerinfo', pointerInfo.pickInfo.pickedPoint);
          const position = pointerInfo.pickInfo.pickedPoint;
          position.y = 1;
          const mesh = this.mesh.addTallbox(scene, position, uuidv4());
          const element = this.mesh2SceneElement(mesh);
          this.realm.add(element);
        }
      }
    });

    return scene;
  }

  mesh2SceneElement(mesh: Mesh): SceneElement {
    const result = <SceneElement>{
      name: mesh.name,
      position: <Vector3>{
        x: mesh.position.x,
        y: mesh.position.y,
        z: mesh.position.z,
      },
      rotation: <Vector3>{
        x: mesh.rotation.x,
        y: mesh.rotation.y,
        z: mesh.rotation.z,
      },
    };
    return result;
  }
}
