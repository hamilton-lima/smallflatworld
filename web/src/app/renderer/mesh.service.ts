import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  Vector3,
  StandardMaterial,
  MeshBuilder,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class MeshService {
  private _addbox(
    scene: Scene,
    width: number,
    height: number,
    color: string,
    position: Vector3,
    name: string
  ): Mesh {
    const box = MeshBuilder.CreateBox(
      name,
      { width: width, height: height },
      scene
    );
    const material = new StandardMaterial('material', scene);
    material.diffuseColor = Color3.FromHexString(color);
    box.material = material;
    box.position = position;
    box.isVisible = true;
    return box;
  }

  addbox(scene: Scene): Mesh {
    const position = Vector3.Zero();
    position.y = 1;
    return this._addbox(scene, 1, 1, '#FF0000', position, 'box');
  }

  addTallbox(scene: Scene, position: Vector3, name: string): Mesh {
    return this._addbox(scene, 1, 3, '#00FF00', position, name);
  }

  constructor() {}
}
