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
export class KeyboardService {
  setup(engineState: EngineState, keyboard: Subject<KeyboardEvent>) {
    keyboard.subscribe((event) => {
      console.log("event", event);
      if( event.key == "ArrowLeft"){
        console.log("left");
      }


    });
  }

  constructor() {}
}
