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
const DEFAULT_DISTANCE = 20;
const DEFAULT_HEIGHT = 6;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  distance = DEFAULT_DISTANCE;
  height = DEFAULT_HEIGHT;
  setup(scene: Scene, character: Mesh): Camera {
    const camera = new FollowCamera(
      'mainCamera',
      Vector3.Zero(),
      scene,
      character
    );
    camera.radius = this.distance;
    camera.heightOffset = this.height;
    return camera;
  }

  constructor() {}
}
