import { Injectable } from '@angular/core';
import { Mesh, Ray, Scene, Vector3 } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { mesh2Memento } from './builders';

const ROTATION_SPEED = 0.04;
const MOVEMENT_SPEED = 3.5;
const GRAVITY = 9.81;
const JUMP_FORCE = 5.8;

class KeyState {
  ArrowLeft: boolean;
  ArrowRight: boolean;
  ArrowUp: boolean;
  ArrowDown: boolean;
  Space: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private keyState = new KeyState();

  constructor(private realm: RealmService) {}

  down(event: KeyboardEvent) {
    const key = this.keyState[event.code];

    if (typeof key != undefined) {
      this.keyState[event.code] = true;
    }
  }

  up(event: KeyboardEvent) {
    const key = this.keyState[event.code];

    if (typeof key != undefined) {
      this.keyState[event.code] = false;
    }
  }

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

  move(scene: Scene, character: Mesh) {
    let rotated = false;
    let moved = false;
    let falling = false;

    if (this.keyState.ArrowRight) {
      character.rotation.y -= ROTATION_SPEED;
      rotated = true;
    }
    if (this.keyState.ArrowLeft) {
      character.rotation.y += ROTATION_SPEED;
      rotated = true;
    }

    if (this.keyState.Space) {
      console.log('jump');
      // if (this.isGrounded(scene, character)) {
        this.jumpEnergy = JUMP_FORCE;
      // }
    }

    let x = 0;
    let z = 0;

    if (this.keyState.ArrowUp || this.keyState.ArrowDown) {
      const _x = Math.sin(character.rotation.y) / MOVEMENT_SPEED;
      const _z = Math.cos(character.rotation.y) / MOVEMENT_SPEED;

      if (this.keyState.ArrowUp) {
        x = _x;
        z = _z;
        moved = true;
      }
      if (this.keyState.ArrowDown) {
        x = -_x;
        z = -_z;
        moved = true;
      }
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

    // apply gravity
    // movement.addInPlace(this.jumpEnergy);
    console.log('movement', movement, this.jumpEnergy);
    character.moveWithCollisions(movement);

    if (moved || rotated || falling) {
      this.realm.updateCharacter(mesh2Memento(character));
    }
  }
}
