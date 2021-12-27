import { Injectable } from '@angular/core';
import {
  Mesh,
  Camera,
  ArcRotateCamera,
  Tools,
  ArcRotateCameraPointersInput,
  Vector3,
} from '@babylonjs/core';
import { EngineState } from './renderer.model';
const DEFAULT_DISTANCE = -25;
const DEFAULT_ALPHA = 135;
const DEFAULT_BETA = 135;

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  distance = DEFAULT_DISTANCE;
  camera: ArcRotateCamera;

  setup(engineState: EngineState): Camera {
    const scene = engineState.scene;
    const character = engineState.character;

    const alpha = Tools.ToRadians(DEFAULT_ALPHA);
    const beta = Tools.ToRadians(DEFAULT_BETA);

    const camera = new ArcRotateCamera(
      'camera',
      alpha,
      beta,
      this.distance,
      engineState.character.position,
      scene
    );

    this.camera = camera;

    camera.attachControl(engineState.engine.getRenderingCanvas(), true);
    camera.inputs.remove(camera.inputs.attached.keyboard);

    //enable only first mouse button
    const mouseInput = (this.camera.inputs.attached.pointers as ArcRotateCameraPointersInput);
    mouseInput.buttons = [0];

    // prevent camera to go thru ground
    camera.collisionRadius = Vector3.One();
    camera.checkCollisions = true;

    this.setTarget(character);
    return camera;
  }

  setTarget(target: Mesh) {
    this.camera.lockedTarget = target;
  }

  enableMouse() {
    this.camera.inputs.attachInput(this.camera.inputs.attached.pointers);
  }

  disableMouse() {
    console.log('inputs', this.camera.inputs);
    this.camera.inputs.attached.pointers.detachControl();
  }
}
