import { Injectable } from '@angular/core';
import { Scene, Mesh, FollowCamera, Camera, Vector3 } from '@babylonjs/core';
const DEFAULT_DISTANCE = 12;
const DEFAULT_HEIGHT = 8;
const STEP = 2;

const MIN = 5;
const MAX = 40;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  distance = DEFAULT_DISTANCE;
  height = DEFAULT_HEIGHT;
  camera: FollowCamera;

  setup(scene: Scene, character: Mesh): Camera {
    const camera = new FollowCamera(
      'mainCamera',
      Vector3.Zero(),
      scene,
      character
    );
    camera.radius = this.distance;
    camera.heightOffset = this.height;
    this.camera = camera;
    return camera;
  }

  zoomOut() {
    if (this.camera.radius < MAX) {
      this.camera.radius += STEP;
      this.camera.heightOffset +=STEP;
    }
  }

  zoomIn() {
    if (this.camera.radius > MIN) {
      this.camera.radius -= STEP;
      this.camera.heightOffset -=STEP;
    }
    console.log('camera.radius', this.camera.radius);
  }

  constructor() {}
}
