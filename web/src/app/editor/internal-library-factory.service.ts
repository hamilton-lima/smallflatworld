import { Injectable } from '@angular/core';
import { AbstractMesh, Scene } from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';

@Injectable({
  providedIn: 'root',
})
export class InternalLibraryFactoryService {
  constructor(private mesh: MeshService) {}

  build(scene: Scene, id: string, name: string): AbstractMesh {
    const cube = this.mesh.getBox(scene);
    const result = this.mesh.createParent(scene, name, true, [cube]);

    return result;
  }
}
