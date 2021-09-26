import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  Vector3,
  StandardMaterial,
  MeshBuilder,
  AbstractMesh,
} from '@babylonjs/core';
import { MeshLoaderService } from '../mesh/mesh-loader.service';

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
    rotation: Vector3,
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

    position.y += box.getBoundingInfo().boundingBox.maximum.y;
    box.position = position;

    box.rotation = rotation;
    box.isVisible = true;
    return box;
  }

  private _getBox(
    scene: Scene,
    width: number,
    height: number,
    color: string,
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
    box.isVisible = false;
    return box;
  }

  public getBox(scene: Scene) {
    return this._getBox(scene, 1, 1, '#FF00FF', 'primitive-box');
  }

  addbox(scene: Scene): Mesh {
    const position = Vector3.Zero();
    position.y = 1;
    return this._addbox(
      scene,
      1,
      1,
      '#FF0000',
      position,
      Vector3.Zero(),
      'box'
    );
  }

  addRotatedBox(
    scene: Scene,
    position: Vector3,
    rotation: Vector3,
    name: string
  ) {
    return this._addbox(scene, 1, 1, '#FF0000', position, rotation, name);
  }

  addTallbox(scene: Scene, position: Vector3, name: string): Mesh {
    return this._addbox(scene, 1, 3, '#00FF00', position, Vector3.Zero(), name);
  }

  addRotatedTallbox(
    scene: Scene,
    position: Vector3,
    rotation: Vector3,
    name: string
  ) {
    return this._addbox(scene, 1, 3, '#00FF00', position, rotation, name);
  }

  cloneMesh(
    scene: Scene,
    mesh: AbstractMesh,
    position: Vector3,
    rotation: Vector3,
    scaling: Vector3,
    name: string
  ): Mesh {

    const result = <Mesh>mesh.clone(name, null);
    result.name = name;
    result.position = position;
    result.rotation = rotation;
    result.scaling = scaling;
    result.isVisible = true;
    result.getChildMeshes().forEach((mesh) => {
      mesh.isVisible = true;
    });

    scene.addMesh(result);
    console.log('clone', result);
    return result;
  }

  constructor(private loader: MeshLoaderService) {}
}
