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
import { NMSColor } from './nmscolor';

const WIDTH = 2;
const HEIGHT= 2;
const DEPTH = 2;
const COLOR = NMSColor.TANGERINE;

@Injectable({
  providedIn: 'root',
})
export class InternalLibraryFactoryService {
  constructor(
    private mesh: MeshService,
    private images: ImagesService,
    private notify: NotifyService
  ) {}

  build(scene: Scene, id: string, name: string, imageName: string): AbstractMesh {
    const cube = this.mesh.getBoxSizeColor(scene, WIDTH, HEIGHT, DEPTH, COLOR);

    const current = this.images.findByName(imageName);
    if (current) {
      // TODO: cache material by image name
      var mat = new StandardMaterial('mat', scene);
      var texture = new Texture(current.base64, scene);
      mat.diffuseTexture = texture;
      cube.material = mat;
    } 

    const result = this.mesh.createParent(scene, name, false, [cube]);
    return result;
  }
}
