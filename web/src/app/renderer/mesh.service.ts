import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  Vector3,
  StandardMaterial,
  MeshBuilder,
  AbstractMesh,
  BoundingInfo,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class MeshService {
  constructor() {}

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
    return this._getBox(scene, 1, 1, '#427BD2', 'primitive-box');
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

  // create a clickable transparent box based on boundingbox information
  public createClickableDummy(
    scene: Scene,
    parent: Mesh,
    boundingBoxInfo: BoundingInfo
  ) {
    const bb = boundingBoxInfo.boundingBox;
    const width = bb.maximum.x - bb.minimum.x;
    const height = bb.maximum.y - bb.minimum.y;
    const depth = bb.maximum.z - bb.minimum.z;

    const clickable = MeshBuilder.CreateBox(
      'clickable',
      { width: width, height: height, depth: depth },
      scene
    );

    clickable.position = bb.center;

    clickable.setParent(parent);
    clickable.isPickable = true;
    clickable.isVisible = true;
    clickable.checkCollisions = true;

    const transparent = new StandardMaterial('transparent', scene);
    transparent.alpha = 0.0;
    clickable.material = transparent;

    return clickable;
  }

  // create parent with boundingbox around all meshes
  public createParent(
    scene: Scene,
    name: string,
    visible: boolean,
    meshes: Mesh[]
  ): Mesh {
    // create parent mesh
    const parent = new Mesh(name, scene);
    parent.isPickable = true;

    // add all loaded meshes as visible children
    meshes.forEach((mesh) => {
      mesh.setParent(parent);
      mesh.isPickable = false;
      mesh.isVisible = visible;
    });

    // calculate bounding box
    let min = meshes[0].getBoundingInfo().boundingBox.minimumWorld;
    let max = meshes[0].getBoundingInfo().boundingBox.maximumWorld;

    // verify each mesh min / max
    for (let i = 1; i < meshes.length; i++) {
      let meshMin = meshes[i].getBoundingInfo().boundingBox.minimumWorld;
      let meshMax = meshes[i].getBoundingInfo().boundingBox.maximumWorld;

      min = Vector3.Minimize(min, meshMin);
      max = Vector3.Maximize(max, meshMax);
    }

    // set parent bounding box
    const boundingBoxInfo = new BoundingInfo(min, max);
    parent.setBoundingInfo(boundingBoxInfo);
    this.createClickableDummy(scene, parent, boundingBoxInfo);
    return parent;
  }
}
