import { Mesh, Vector3 } from '@babylonjs/core';
import {
  SceneElementMemento,
  Vector3Memento,
} from '../../../../colyseus-server/src/room.state';
import { SceneElement } from './renderer.model';

export function mesh2Memento(mesh: Mesh): SceneElementMemento {
  const result = <SceneElementMemento>{
    name: mesh.name,
    position: vector3ToMemento(mesh.position),
    rotation: vector3ToMemento(mesh.rotation),
    scaling: vector3ToMemento(mesh.scaling),
  };
  return result;
}

export function sceneElement2Memento(
  element: SceneElement
): SceneElementMemento {
  const result = <SceneElementMemento>{
    name: element.name,
    componentID: element.componentID,
    position: vector3ToMemento(element.position),
    rotation: vector3ToMemento(element.rotation),
    scaling: vector3ToMemento(element.scaling),
    imageName: element.imageName,
    skipColision: element.skipColision,
    code: element.code
  };
  return result;
}

export function memento2SceneElement(
  element: SceneElementMemento
): SceneElement {
  const result = <SceneElement>{
    name: element.name,
    componentID: element.componentID,
    position: buildVector3(element.position),
    rotation: buildVector3(element.rotation),
    scaling: buildVector3(element.scaling),
    imageName: element.imageName,
    skipColision: element.skipColision,
    code: element.code
  };
  return result;
}

// convert Vecto3Memento to BabylonVector3
export function buildVector3(vector3: Vector3Memento) {
  return new Vector3(vector3.x, vector3.y, vector3.z);
}

// convert exported vector3 data object in real Vector3 instance
export function vector3ToMemento(vector3: Vector3) {
  return <Vector3Memento>{
    x: vector3.x,
    y: vector3.y,
    z: vector3.z,
  };
}
