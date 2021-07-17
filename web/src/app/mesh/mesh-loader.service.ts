import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  AnimationGroup,
  IParticleSystem,
  Logger,
  Scene,
  SceneLoader,
  Skeleton,
} from '@babylonjs/core';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { GLTFFileLoader} from '@babylonjs/loaders';

@Injectable({
  providedIn: 'root',
})
export class MeshLoaderService {
  constructor(private logger: NgxFancyLoggerService) {
    GLTFFileLoader.IncrementalLoading = false;
  }

  // load all meshes from specific file from /assets folder
  public loadAllMeshes(
    scene: Scene,
    fileName: string,
    visible = false
  ): Promise<AbstractMesh[]> {
    return new Promise<AbstractMesh[]>((resolve, reject) => {
      try {
        SceneLoader.ImportMeshAsync('', 'assets/', fileName, scene).then(
          (value: {
            meshes: AbstractMesh[];
            particleSystems: IParticleSystem[];
            skeletons: Skeleton[];
            animationGroups: AnimationGroup[];
          }) => {
            value.meshes.forEach((mesh) => {
              mesh.isVisible = visible;
            });
            resolve(value.meshes);
          }
        );
      } catch (error) {
        this.logger.error('Error while loading all meshes', fileName, error);
        reject(error);
      }
    });
  }
}
