import { Injectable } from '@angular/core';
import { Mesh, Ray, RayHelper, Scene, Vector3 } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { mesh2Memento } from './builders';

const ROTATION_SPEED = 0.04;
const MOVEMENT_SPEED = 3.5;
const GRAVITY = -2.8;
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

  constructor(private realm: RealmService) {
    this.gravity = new Vector3();
  }

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

  gravity: Vector3;

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
    const deltaTime = scene.getEngine().getDeltaTime() / 1000.0;

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

    this.gravity = this.gravity.addInPlace(
      Vector3.Up().scale(deltaTime * GRAVITY)
    );

    if (this.gravity.y < -JUMP_FORCE) {
      this.gravity.y = -JUMP_FORCE;
    }

    if (this.keyState.Space) {
      console.log('jump');
      if(this.isGrounded(scene, character)){
        this.gravity.y = JUMP_FORCE;
      } else {
        console.log('NOT grounded');
      }
    }

    if (this.keyState.ArrowUp || this.keyState.ArrowDown) {
      const x = Math.sin(character.rotation.y) / MOVEMENT_SPEED;
      const z = Math.cos(character.rotation.y) / MOVEMENT_SPEED;
      const forward = new Vector3(x, 0, z);
      if (this.keyState.ArrowUp) {
        character.moveWithCollisions(forward);
        moved = true;
      }
      if (this.keyState.ArrowDown) {
        character.moveWithCollisions(forward.negate());
        moved = true;
      }
    } 

    // apply gravity 
    // console.log('gravity', gravity);
    character.moveWithCollisions(this.gravity);

    if (moved || rotated) {
      this.realm.updateCharacter(mesh2Memento(character));
    }
  }
}
