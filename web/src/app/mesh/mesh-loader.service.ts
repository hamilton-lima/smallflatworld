import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  AnimationGroup,
  IParticleSystem,
  Mesh,
  Scene,
  SceneLoader,
  Skeleton,
} from '@babylonjs/core';
import { GLTFFileLoader } from '@babylonjs/loaders';
import { MeshService } from '../renderer/mesh.service';

@Injectable({
  providedIn: 'root',
})
export class MeshLoaderService {
  constructor(private mesh: MeshService) {
    GLTFFileLoader.IncrementalLoading = false;
  }

  public loadVisible(scene: Scene, fileName: string, meshName: string) {
    return this.load(scene, fileName, meshName, true);
  }

  loadWithClickable(
    scene: Scene,
    fileName: string,
    meshName: string,
    visible = false
  ) {
    const self = this;
    return new Promise<AbstractMesh>((resolve, reject) => {
      this.loadAllMeshes(scene, fileName, visible).then((meshes: Mesh[]) => {
        const result = this.mesh.createParent(scene, meshName, visible, meshes);
        result.isPickable = true;
        result.isVisible = visible;
        resolve(result);
      });
    });
  }

  public load(
    scene: Scene,
    fileName: string,
    meshName: string,
    visible = false
  ) {
    const self = this;
    return new Promise<AbstractMesh>((resolve, reject) => {
      this.loadAllMeshes(scene, fileName, visible).then((meshes: Mesh[]) => {
        let result: AbstractMesh = meshes.find((mesh) => {
          return mesh.name === meshName;
        });

        if (!result) {
          result = this.mesh.createParent(scene, meshName, visible, meshes);
        }

        result.isPickable = true;
        result.isVisible = visible;
        resolve(result);
      });
    });
  }

  public loadLegacy(
    scene: Scene,
    fileName: string,
    meshName: string,
    visible = false
  ) {
    const self = this;
    return new Promise<AbstractMesh>((resolve, reject) => {
      this.loadAllMeshes(scene, fileName, visible).then((meshes: Mesh[]) => {
        // look for the named mesh
        let result: AbstractMesh = meshes.find((mesh) => {
          return mesh.name === meshName;
        });

        // if not found try to use mesh named __root__
        if (!result) {
          result = meshes.find((mesh) => {
            return mesh.name === '__root__';
          });

          if (result) {
            meshes.forEach((mesh) => {
              if (mesh.name !== '__root__') {
                mesh.isPickable = true;
                mesh.isVisible = visible;
                result.addChild(mesh);
              }
            });
          }
        }

        // if not found create an empty mesh and add all as child
        if (!result) {
          result = new Mesh('root');
          meshes.forEach((mesh) => {
            mesh.isPickable = true;
            mesh.isVisible = visible;
            result.addChild(mesh);
          });
        }

        if (result) {
          result.isVisible = visible;
          result.isPickable = true;
          resolve(result);
        } else {
          reject('Mesh not found: ' + meshName);
        }
      });
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
            console.log('loaded', fileName, value);
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
            // dispose loaded meshes. only animations are needed
            value.meshes.forEach( (mesh)=>{
              mesh.dispose();
            });

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
