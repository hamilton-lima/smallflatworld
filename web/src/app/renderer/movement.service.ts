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

  constructor() {
    this.handlers.KeyW = this.handlers.ArrowUp;
    this.handlers.KeyS = this.handlers.ArrowDown;
    this.handlers.KeyA = this.handlers.ArrowLeft;
    this.handlers.KeyD = this.handlers.ArrowRight;
  }

  setup(engineState: EngineState, keyboard: Subject<KeyboardEvent>): void {
    keyboard.subscribe((event) => {
      const handler = this.handlers[event.code];

      // trigger the event if handler is present
      if (handler) {
        handler.next(event);
      }
    });

    this.handlers.ArrowLeft.subscribe( event => {
      console.log('left');
    });

    this.handlers.ArrowRight.subscribe( event => {
      console.log('right');
    });

    this.handlers.ArrowUp.subscribe( event => {
      console.log('up');
    });

    this.handlers.ArrowDown.subscribe( event => {
      console.log('down');
    });

    this.handlers.Space.subscribe( event => {
      console.log('space');
    });

  }

}
