import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  StandardMaterial,
  MeshBuilder,
  FollowCamera,
  Camera,
  Vector3,
} from '@babylonjs/core';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  setup(scene: Scene): Scene {
    let vector: Vector3;
    scene.onPointerDown = function (event, pickResult) {
      if( !pickResult || !pickResult.pickedPoint){
        console.warn('No picked result');
        return;
      }

      //left mouse click
      if (event.button == 0) {
        vector = pickResult.pickedPoint;
        console.log(
          'left mouse click: ' + vector.x + ',' + vector.y + ',' + vector.z
        );
      }
      //right mouse click
      if (event.button == 2) {
        vector.x = pickResult.pickedPoint.x;
        vector.y = pickResult.pickedPoint.y;
        vector.z = pickResult.pickedPoint.z;
        console.log(
          'right mouse click: ' + vector.x + ',' + vector.y + ',' + vector.z
        );
      }
      //Wheel button or middle button on mouse click
      if (event.button == 1) {
        vector['x'] = pickResult.pickedPoint['x'];
        vector['y'] = pickResult.pickedPoint['y'];
        vector['z'] = pickResult.pickedPoint['z'];
        console.log(
          'middle mouse click: ' + vector.x + ',' + vector.y + ',' + vector.z
        );
      }
    };
    return scene;
  }

  constructor() {}
}
