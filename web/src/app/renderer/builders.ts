import { Mesh, Vector3 } from '@babylonjs/core';
import {
  SceneElementMemento,
  Vector3Memento,
} from '../../../../server/src/events.model';
import { SceneElement } from './renderer.model';

export function mesh2SceneElement(mesh: Mesh): SceneElement {
  const result = <SceneElement>{
    name: mesh.name,
    position: <Vector3>{
      x: mesh.position.x,
      y: mesh.position.y,
      z: mesh.position.z,
    },
    rotation: <Vector3>{
      x: mesh.rotation.x,
      y: mesh.rotation.y,
      z: mesh.rotation.z,
    },
  };
  return result;
}

export function sceneElement2Memento(
  element: SceneElement
): SceneElementMemento {
  const result = <SceneElementMemento>{
    name: element.name,
    componentID: element.componentID,
    position: <Vector3Memento>{
      x: element.position.x,
      y: element.position.y,
      z: element.position.z,
    },
    rotation: <Vector3Memento>{
      x: element.rotation.x,
      y: element.rotation.y,
      z: element.rotation.z,
    },
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
