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
  Vector4,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class MeshService {
  faceUV: Array<Vector4>;
  constructor() {}

  // Create faceUV to match 6 sides texture to sides of the cube
  // see https://playground.babylonjs.com/#ICLXQ8
  private getFaceUV() {
    if (this.faceUV) {
      return this.faceUV;
    }

    const faceUV = new Array(6);

    //set all faces
    faceUV[0] = new Vector4(0, 0.5, 1 / 3, 1);
    faceUV[1] = new Vector4(1 / 3, 0, 2 / 3, 0.5);
    faceUV[2] = new Vector4(2 / 3, 0, 1, 0.5);
    faceUV[3] = new Vector4(0, 0, 1 / 3, 0.5);
    faceUV[4] = new Vector4(1 / 3, 0.5, 2 / 3, 1);
    faceUV[5] = new Vector4(2 / 3, 0.5, 1, 1);

    this.faceUV = faceUV;
    return faceUV;
  }

  private _addbox(
    scene: Scene,
    width: number,
    height: number,
    depth: number,
    color: string,
    position: Vector3,
    rotation: Vector3,
    name: string
  ): Mesh {
    const box = this._getBox(scene, width, height, depth, color, name);
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
    depth: number,
    color: string,
    name: string
  ): Mesh {
    const box = MeshBuilder.CreateBox(
      name,
      {
        width: width,
        height: height,
        depth: depth,
        faceUV: this.getFaceUV(),
        wrap: true,
      },
      scene
    );
    const material = new StandardMaterial('material', scene);
    material.diffuseColor = Color3.FromHexString(color);
    box.material = material;
    box.isVisible = false;
    return box;
  }

  public getBox(scene: Scene) {
    return this._getBox(scene, 1, 1, 1, '#427BD2', 'primitive-box');
  }

  public getBoxSizeColor(
    scene: Scene,
    width: number,
    height: number,
    depth: number,
    color: string
  ) {
    return this._getBox(scene, width, height, depth, color, 'primitive-box');
  }

  addbox(scene: Scene): Mesh {
    const position = Vector3.Zero();
    position.y = 1;
    return this._addbox(
      scene,
      1,
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
    return this._addbox(scene, 1, 1, 1, '#FF0000', position, rotation, name);
  }

  addTallbox(scene: Scene, position: Vector3, name: string): Mesh {
    return this._addbox(
      scene,
      1,
      3,
      1,
      '#00FF00',
      position,
      Vector3.Zero(),
      name
    );
  }

  addRotatedTallbox(
    scene: Scene,
    position: Vector3,
    rotation: Vector3,
    name: string
  ) {
    return this._addbox(scene, 1, 3, 1, '#00FF00', position, rotation, name);
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
    boundingBoxInfo: BoundingInfo,
    skipColision: boolean
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

    console.log('skipColision mesh service', skipColision);

    if (skipColision) {
      clickable.checkCollisions = false;
    } else {
      clickable.checkCollisions = true;
    }

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
    meshes: Mesh[],
    skipColision: boolean
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
    this.createClickableDummy(scene, parent, boundingBoxInfo, skipColision);
    return parent;
  }

  getClickableFromMesh(mesh: Mesh): Mesh {
    const found = mesh.getChildren().find((node) => {
      return node.name.endsWith('.clickable');
    });
    if (found) {
      return <Mesh>found;
    } else {
      console.log('no clickable found');
    }
    return null;
  }
}
