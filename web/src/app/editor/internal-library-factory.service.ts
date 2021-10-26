import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  Scene,
  StandardMaterial,
  Texture,
} from '@babylonjs/core';
import { ImagesService } from '../library/images.service';
import { MeshService } from '../renderer/mesh.service';
import { NotifyService } from '../shared/notify.service';

@Injectable({
  providedIn: 'root',
})
export class InternalLibraryFactoryService {
  constructor(
    private mesh: MeshService,
    private images: ImagesService,
    private notify: NotifyService
  ) {}

  build(scene: Scene, id: string, name: string): AbstractMesh {
    const cube = this.mesh.getBox(scene);

    const current = this.images.getCurrent();
    if (current) {
      var mat = new StandardMaterial('mat', scene);
      var texture = new Texture(current.base64, scene);
      mat.diffuseTexture = texture;
      cube.material = mat;
    } else {
      this.notify.warn('If you select an image it will be used when adding elements.');
    }

    const result = this.mesh.createParent(scene, name, true, [cube]);

    return result;
  }
}
