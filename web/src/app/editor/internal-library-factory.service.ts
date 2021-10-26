import { Injectable } from '@angular/core';
import { AbstractMesh, Scene, StandardMaterial, Texture } from '@babylonjs/core';
import { ImagesService } from '../library/images.service';
import { MeshService } from '../renderer/mesh.service';

@Injectable({
  providedIn: 'root',
})
export class InternalLibraryFactoryService {
  constructor(private mesh: MeshService, private images:ImagesService) {}

  build(scene: Scene, id: string, name: string): AbstractMesh {
    const cube = this.mesh.getBox(scene);

    // var mat = new StandardMaterial("mat", scene);
    // var texture = new Texture(this.images.last, scene);
    // mat.diffuseTexture = texture;
    // cube.material = mat;

    const result = this.mesh.createParent(scene, name, true, [cube]);

    return result;
  }
}
