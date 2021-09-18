import { Mesh, Vector3 } from '@babylonjs/core';
import { Vector3Memento } from '../../../../server/src/events.model';
import { SceneElement } from '../persistence/persistence.model';

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

// convert exported vector3 data object in real Vector3 instance
export function buildVector3(vector3: Vector3Memento) {
  return new Vector3(vector3.x, vector3.y, vector3.z);
}
