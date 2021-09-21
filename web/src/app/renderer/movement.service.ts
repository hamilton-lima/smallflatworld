import { Injectable } from '@angular/core';
import { Mesh, Vector3 } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { mesh2SceneElement } from './builders';

const ROTATION_SPEED = 0.03;
const MOVEMENT_SPEED = 1.5;

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

  move(character: Mesh) {
    let rotated = false;
    let moved = false;

    if (this.keyState.ArrowRight) {
      character.rotation.y -= ROTATION_SPEED;
      rotated = true;
    }
    if (this.keyState.ArrowLeft) {
      character.rotation.y += ROTATION_SPEED;
      rotated = true;
    }

    if (this.keyState.ArrowUp || this.keyState.ArrowDown) {
      const x = Math.sin(character.rotation.y) / MOVEMENT_SPEED;
      const z = Math.cos(character.rotation.y) / MOVEMENT_SPEED;
      const forward = new Vector3(x, 0, z);
      if (this.keyState.ArrowUp) {
        character.moveWithCollisions(forward.negate());
        moved = true;
      }
      if (this.keyState.ArrowDown) {
        character.moveWithCollisions(forward);
        moved = true;
      }
    }

    if (moved || rotated) {
      this.realm.updateCharacter(mesh2SceneElement(character));
    }
  }
}
