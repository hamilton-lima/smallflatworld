import { Injectable } from '@angular/core';
import { Mesh, Ray, Scene, Vector3 } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { mesh2Memento } from './builders';
import { CameraService } from './camera.service';
import { KeyboardService } from './keyboard.service';
import { EngineState } from './renderer.model';

const ROTATION_SPEED = 0.04;
const MOVEMENT_SPEED = 3.5;
const GRAVITY = 5.8;
const JUMP_FORCE = 0.5;

class RotationPair {
  x: number;
  z: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  constructor(
    private realm: RealmService,
    private keyboard: KeyboardService,
    private camera: CameraService
  ) {}

  jumpEnergy = 0.0;

  isGrounded(scene: Scene, character: Mesh) {
    const ray = new Ray(
      character.getBoundingInfo().boundingBox.minimum,
      new Vector3(0, -1, 0),
      0.1
    );
    const pick = scene.pickWithRay(ray);
    if (pick.hit) {
      return true;
    }
    return false;
  }

  calcRotation(rotation: number, speed: number): RotationPair {
    const result = <RotationPair>{
      x: Math.sin(rotation) / speed,
      z: Math.cos(rotation) / speed,
    };
    return result;
  }

  move(engineState: EngineState) {
    const scene = engineState.scene;
    const character = engineState.character;

    let rotated = false;
    let moved = false;
    let falling = false;

    if (this.keyboard.keyState.ArrowRight || this.keyboard.keyState.KeyD) {
      character.rotation.y -= ROTATION_SPEED;
      rotated = true;
    }
    if (this.keyboard.keyState.ArrowLeft || this.keyboard.keyState.KeyA) {
      character.rotation.y += ROTATION_SPEED;
      rotated = true;
    }

    if (this.keyboard.keyState.Space) {
      console.log('jump');
      // if (this.isGrounded(scene, character)) {
      this.jumpEnergy = JUMP_FORCE;
      // }
    }

    let x = 0;
    let z = 0;

    if (this.keyboard.keyState.ArrowUp || this.keyboard.keyState.KeyW) {
      const rotation = this.calcRotation(character.rotation.y, MOVEMENT_SPEED);
      x = rotation.x;
      z = rotation.z;
      moved = true;
    }

    if (this.keyboard.keyState.ArrowDown || this.keyboard.keyState.KeyS) {
      const rotation = this.calcRotation(character.rotation.y, MOVEMENT_SPEED);
      x = -rotation.x;
      z = -rotation.z;
      moved = true;
    }

    // gradual reduction of jump energy
    const delta = scene.getEngine().getDeltaTime() / 1000.0;
    const gravity = GRAVITY * delta;
    this.jumpEnergy = this.jumpEnergy - gravity;

    // keep jumpEnergy to the gravity
    if (this.jumpEnergy < -GRAVITY) {
      this.jumpEnergy = -GRAVITY;
    } else {
      falling = true;
    }

    const movement = new Vector3(x, this.jumpEnergy, z);
    character.moveWithCollisions(movement);

    if (moved || rotated || falling) {
      this.camera.setTarget(character);
      this.realm.updateCharacter(mesh2Memento(character));
    }
  }

  teleport(character: Mesh, position: Vector3, rotation: Vector3) {
    character.position = position;
    character.rotation = rotation;

    this.realm.updateCharacter(mesh2Memento(character));
  }
}
