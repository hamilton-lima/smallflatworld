import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  StandardMaterial,
  MeshBuilder,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class MeshService {
  addbox(scene: Scene): Mesh {
    const box = MeshBuilder.CreateBox('box', { width: 1, height: 1 }, scene);

    const material = new StandardMaterial('material', scene);
    material.diffuseColor = Color3.FromHexString('#FF0000');
    box.material = material;
    box.position.x = 0;
    box.position.z = 0;
    box.isVisible = true;
    return box;
  }

  constructor() {}
}
