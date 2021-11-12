import { Injectable } from '@angular/core';
import { Scene, Mesh, FollowCamera, Camera, Vector3 } from '@babylonjs/core';
const DEFAULT_DISTANCE = -25;
const DEFAULT_HEIGHT = 25;
const STEP = 2;

const MIN = 6;
const MAX = 60;

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
    console.log('camera.cameraAcceleration', camera.cameraAcceleration);
    camera.cameraAcceleration = camera.cameraAcceleration / 2;

    this.camera = camera;
    return camera;
  }

  getAngle() {
    if (this.camera) {
      return this.camera.getDirection(Vector3.Zero());
    } else {
      console.warn('get camera angle with no camera set');
      return Vector3.Zero();
    }
  }

  zoomOut() {
    if (Math.abs(this.camera.radius) < MAX) {
      this.camera.radius -= STEP;
      this.camera.heightOffset += STEP;
    }
  }

  zoomIn() {
    if (Math.abs(this.camera.radius) > MIN) {
      this.camera.radius += STEP;
      this.camera.heightOffset -= STEP;
    }
  }

  constructor() {}
}
