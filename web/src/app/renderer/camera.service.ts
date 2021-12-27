import { Injectable } from '@angular/core';
import {
  Mesh,
  Camera,
  ArcFollowCamera,
  FreeCamera,
  ArcRotateCamera,
  Tools,
  ArcRotateCameraPointersInput,
  Vector3,
} from '@babylonjs/core';
import { EngineState } from './renderer.model';
const DEFAULT_DISTANCE = -25;
const DEFAULT_HEIGHT = 25;
const STEP = 6;

const MIN = 7;
const MAX = 70;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  distance = DEFAULT_DISTANCE;
  height = DEFAULT_HEIGHT;
  camera: ArcRotateCamera;

  setup(engineState: EngineState): Camera {
    const scene = engineState.scene;
    const character = engineState.character;

    // const camera = new ArcFollowCamera(
    //   'mainCamera',
    //   45,
    //   -45,
    //   this.distance,
    //   engineState.character,
    //   scene
    // );

    const alpha = Tools.ToRadians(135);
    const beta = Tools.ToRadians(135);

    const camera = new ArcRotateCamera(
      'camera',
      alpha,
      beta,
      this.distance,
      engineState.character.position,
      scene
    );

    camera.attachControl(engineState.engine.getRenderingCanvas(), true);
    camera.inputs.remove(camera.inputs.attached.keyboard);
    // camera.panningSensibility = 0;

    //enable only first mouse button
    const mouseInput = (camera.inputs.attached.pointers as ArcRotateCameraPointersInput);
    mouseInput.buttons = [0];

    camera.collisionRadius = Vector3.One();
    camera.checkCollisions = true; 

    this.camera = camera;

    this.setTarget(character);
    return camera;
  }

  setTarget(target: Mesh) {
    this.camera.lockedTarget = target;
  }

  zoomOut() {
    // if (Math.abs(this.camera.radius) < MAX) {
    //   this.camera.radius -= STEP;
    // }
  }

  zoomIn() {
    // if (Math.abs(this.camera.radius) > MIN) {
    //   this.camera.radius += STEP;
    // }
  }

  constructor() {}
}
