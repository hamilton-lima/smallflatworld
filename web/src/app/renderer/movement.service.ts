import { ElementRef, Injectable } from '@angular/core';
import {
  Engine,
  FreeCamera,
  Scene,
  Light,
  Mesh,
  Color3,
  Color4,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  Texture,
  DynamicTexture,
  Space,
  Camera,
  MeshBuilder,
} from '@babylonjs/core';
import { Subject } from 'rxjs';
import { EngineState } from './renderer.model';

const ROTATION_SPEED = 0.3;
const MOVEMENT_SPEED = 0.3;

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  readonly handlers = {
    ArrowLeft: new Subject<KeyboardEvent>(),
    ArrowRight: new Subject<KeyboardEvent>(),
    ArrowUp: new Subject<KeyboardEvent>(),
    ArrowDown: new Subject<KeyboardEvent>(),
    KeyW: null,
    KeyS: null,
    KeyA: null,
    KeyD: null,
    Space: new Subject<KeyboardEvent>(),
  };

  registerWSADKeys() {
    this.handlers.KeyW = this.handlers.ArrowUp;
    this.handlers.KeyS = this.handlers.ArrowDown;
    this.handlers.KeyA = this.handlers.ArrowLeft;
    this.handlers.KeyD = this.handlers.ArrowRight;
  }

  setup(engineState: EngineState, keyboard: Subject<KeyboardEvent>): void {
    this.registerWSADKeys();

    keyboard.subscribe((event) => {
      const handler = this.handlers[event.code];

      // trigger the event if handler is present
      if (handler) {
        handler.next(event);
      }
    });

    this.handlers.ArrowLeft.subscribe((event) => {
      engineState.character.rotation.y -= ROTATION_SPEED;
    });

    this.handlers.ArrowRight.subscribe((event) => {
      engineState.character.rotation.y += ROTATION_SPEED;
    });

    this.handlers.ArrowUp.subscribe((event) => {
      engineState.character.position.z += MOVEMENT_SPEED;
    });

    this.handlers.ArrowDown.subscribe((event) => {
      engineState.character.position.z -= MOVEMENT_SPEED;
    });

    this.handlers.Space.subscribe((event) => {
      console.log('space');
    });
  }
}
