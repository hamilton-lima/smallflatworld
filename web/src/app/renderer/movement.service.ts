import { Injectable } from '@angular/core';
import {
  Mesh,
  Vector3,
} from '@babylonjs/core';

const ROTATION_SPEED = 0.2;
const MOVEMENT_SPEED = 2.5;

class KeyState {
  ArrowLeft: boolean;
  ArrowRight: boolean;
  ArrowUp: boolean;
  ArrowDown: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private keyState = new KeyState();

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

  move(character: Mesh) {
    if (this.keyState.ArrowLeft) {
      character.rotation.y -= ROTATION_SPEED;
    }
    if (this.keyState.ArrowRight) {
      character.rotation.y += ROTATION_SPEED;
    }

    if (this.keyState.ArrowUp || this.keyState.ArrowDown) {
      const x = Math.sin(character.rotation.y) / MOVEMENT_SPEED;
      const z = Math.cos(character.rotation.y) / MOVEMENT_SPEED;
      const forward = new Vector3(x, 0, z);
      if (this.keyState.ArrowUp) {
        character.moveWithCollisions(forward);
      }
      if (this.keyState.ArrowDown) {
        character.moveWithCollisions(forward.negate());
      }
    }
  }

}
