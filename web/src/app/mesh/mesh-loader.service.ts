import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  AnimationGroup,
  IParticleSystem,
  Scene,
  SceneLoader,
  Skeleton,
} from '@babylonjs/core';
import { GLTFFileLoader } from '@babylonjs/loaders';

@Injectable({
  providedIn: 'root',
})
export class MeshLoaderService {
  constructor() {
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

          if(!result){
            // try to skip "__root__" and get first mesh
            // TODO: combine all meshes
            const filtered = meshes.filter( mesh => {
              return mesh.name !== "__root__";
            });
            if( filtered.length > 0){
              result = filtered[0];
            }
          }

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
        console.error('Error while loading all meshes', fileName, error);
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
        console.error('Error while loading all meshes', fileName, error);
        reject(error);
      }
    });
  }
}
