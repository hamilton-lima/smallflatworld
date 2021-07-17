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
import { GLTFFileLoader } from '@babylonjs/loaders';

@Injectable({
  providedIn: 'root',
})
export class MeshLoaderService {
  constructor(private logger: NgxFancyLoggerService) {
    GLTFFileLoader.IncrementalLoading = false;
  }

  public loadVisible(scene: Scene, fileName: string, meshName: string) {
    return this.load(scene, fileName, meshName, true);
  }

  public load(
    scene: Scene,
    fileName: string,
    meshName: string,
    visible = false
  ) {
    const self = this;
    return new Promise<AbstractMesh>((resolve, reject) => {
      this.loadAllMeshes(scene, fileName, visible).then(
        (meshes: AbstractMesh[]) => {
          let result: AbstractMesh;
          meshes.forEach((mesh) => {
            if (mesh.name === meshName) {
              result = mesh;
            }
          });

          if (result) {
            result.isVisible = visible;
            result.isPickable = true;
            resolve(result);
          } else {
            reject('Mesh not found: ' + meshName);
          }
        }
      );
    });
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
            console.log('loaded', value);
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

    // load all animations from specific file from /assets folder
    public loadAllAnimations(
      scene: Scene,
      fileName: string,
      visible = false
    ): Promise<AnimationGroup[]> {
      return new Promise<AnimationGroup[]>((resolve, reject) => {
        try {
          SceneLoader.ImportMeshAsync('', 'assets/', fileName, scene).then(
            (value: {
              meshes: AbstractMesh[];
              particleSystems: IParticleSystem[];
              skeletons: Skeleton[];
              animationGroups: AnimationGroup[];
            }) => {
              console.log('animation loaded', value);
              resolve(value.animationGroups);
            }
          );
        } catch (error) {
          this.logger.error('Error while loading all meshes', fileName, error);
          reject(error);
        }
      });
    }
  
}
