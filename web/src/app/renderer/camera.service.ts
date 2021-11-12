import { Injectable } from '@angular/core';
import { Scene, Mesh, FollowCamera, Camera, Vector3, Vector2, Tools } from '@babylonjs/core';
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

  getCameraRotation() {
    console.log('camera', this.camera);
    if (this.camera) {

      let origin = new Vector3(0, 0, 1);
      let v1 = origin.subtract(this.camera.rotation);
    
      v1.normalize();
      
      let angle = Math.acos(Vector3.Dot(origin, v1));
      let angleInDegree = Tools.ToDegrees(angle);

      return angleInDegree;
    } else {
      console.warn('get camera angle with no camera set');
      return 0;
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
