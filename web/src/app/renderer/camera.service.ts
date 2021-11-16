import { Injectable } from '@angular/core';
import { Mesh, Camera, ArcFollowCamera } from '@babylonjs/core';
import { EngineState } from './renderer.model';
const DEFAULT_DISTANCE = -25;
const DEFAULT_HEIGHT = 25;
const STEP = 6;

const MIN = 3;
const MAX = 100;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  distance = DEFAULT_DISTANCE;
  height = DEFAULT_HEIGHT;
  camera: ArcFollowCamera;

  setup(engineState: EngineState): Camera {
    const scene = engineState.scene;
    const character = engineState.character;

    const camera = new ArcFollowCamera(
      'mainCamera',
      45,
      -45,
      this.distance,
      engineState.character,
      scene
    );
    camera.attachControl(engineState.engine.getRenderingCanvas(), true);
    camera.radius = this.distance;

    this.camera = camera;

    this.setTarget(character);
    return camera;
  }

  setTarget(target: Mesh) {
    this.camera.lockedTarget = target;
  }

  zoomOut() {
    if (Math.abs(this.camera.radius) < MAX) {
      this.camera.radius -= STEP;
    }
  }

  zoomIn() {
    if (Math.abs(this.camera.radius) > MIN) {
      this.camera.radius += STEP;
    }
  }

  constructor() {}
}
