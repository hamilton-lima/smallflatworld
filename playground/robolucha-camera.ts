import { Injectable } from '@angular/core';
import { Luchador3D } from './luchador3d';

export enum CameraChange{
  FirstPerson = "firstPerson",
  ThirdPerson = "thirdPerson",
  Tower = "tower",
  Crazy = "crazy"
}

@Injectable({
  providedIn: 'root'
})
export class Camera3DService {
  readonly CAMERA_POSITION = new BABYLON.Vector3(0, 28, -20);

  constructor() { }

  towerCamera(camera: BABYLON.FreeCamera, luchador : Luchador3D){
    var position = this.CAMERA_POSITION.add(luchador.getPosition());
    var distance = BABYLON.Vector3.Distance(camera.position, position);

    if(distance > 0.5)
      camera.position = BABYLON.Vector3.Lerp(camera.position, position, 0.1);
    else
      camera.position = position;
    
    camera.setTarget(luchador.getPosition());
  }

  firstPersonCamera(camera: BABYLON.FreeCamera, luchador : Luchador3D){

    var angle = (luchador.getTurret().rotation.y);
    var radius = -5;
    var offSetY = 2;
    var offSet = 2;
    var x = luchador.getPosition().x - Math.cos(angle) * radius;
    var z = luchador.getPosition().z + Math.sin(angle) * radius;
    var y = luchador.getPosition().y + offSetY;

    var destin = new BABYLON.Vector3(luchador.getPosition().x, luchador.getPosition().y + offSet, luchador.getPosition().z);

    var distance = BABYLON.Vector3.Distance(camera.position, destin);

    if(distance > 2){
      camera.position = BABYLON.Vector3.Lerp(camera.position, destin, 0.1);
      camera.setTarget(BABYLON.Vector3.Lerp(camera.getTarget(), new BABYLON.Vector3(x,y,z), 0.1));
    }
    else{
      camera.position = destin;
      camera.setTarget(new BABYLON.Vector3(x,y,z));
    }
    //this.camera.setTarget(BABYLON.Vector3.Lerp(this.camera.getTarget(), new BABYLON.Vector3(x,y,z), 0.95));

  }

  thirdPersonCamera(camera: BABYLON.FreeCamera, luchador : Luchador3D){

    var angle = (luchador.getTurret().rotation.y);
    var radius = 12;
    var offSetY = 7;
    var x = luchador.getPosition().x - Math.cos(angle) * radius;
    var z = luchador.getPosition().z + Math.sin(angle) * radius;
    var y = luchador.getPosition().y + offSetY;

    var destin = new BABYLON.Vector3(x,y,z);
    var distance = BABYLON.Vector3.Distance(camera.position, destin);
    
    if(distance > 2)
      camera.position = BABYLON.Vector3.Lerp(camera.position, destin, 0.1); 
    else
      camera.position = destin;

    camera.setTarget(luchador.getPosition());

  }

  crazyCamera(camera: BABYLON.FreeCamera, luchador : Luchador3D){
    
    var angle = (luchador.getTurret().rotation.y);
    var radius = -12;
    var offSetY = 7;
    var x = luchador.getPosition().x + Math.cos(angle) * radius;
    var z = luchador.getPosition().z + Math.sin(angle) * radius;
    var y = luchador.getPosition().y + offSetY;
    
    var destin = new BABYLON.Vector3(x,y,z);
    var distance = BABYLON.Vector3.Distance(camera.position, destin);

    if(distance > 2){
      camera.position = BABYLON.Vector3.Lerp(camera.position, destin, 0.1);
      camera.setTarget(BABYLON.Vector3.Lerp(camera.getTarget(), luchador.getPosition(), 0.1));
    }
    else{
      camera.position = destin;
      camera.setTarget(luchador.getPosition());
    }
  }

}
