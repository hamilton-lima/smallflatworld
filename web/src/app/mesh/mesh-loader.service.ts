import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  AnimationGroup,
  BoundingInfo,
  IParticleSystem,
  Mesh,
  Scene,
  SceneLoader,
  Skeleton,
  Vector3,
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

  // create parent with boundingbox around all meshes
  public createParent(
    scene: Scene,
    name: string,
    visible: boolean,
    meshes: Mesh[]
  ): Mesh {
    // create parent mesh
    const parent = new Mesh(name, scene);
    parent.isPickable = true;

    // add all loaded meshes as visible children
    meshes.forEach((mesh) => {
      mesh.setParent(parent);
      mesh.isPickable = false;
      mesh.isVisible = visible;
    });

    // calculate bounding box
    let min = meshes[0].getBoundingInfo().boundingBox.minimumWorld;
    let max = meshes[0].getBoundingInfo().boundingBox.maximumWorld;

    // verify each mesh min / max
    for (let i = 1; i < meshes.length; i++) {
      let meshMin = meshes[i].getBoundingInfo().boundingBox.minimumWorld;
      let meshMax = meshes[i].getBoundingInfo().boundingBox.maximumWorld;

      min = Vector3.Minimize(min, meshMin);
      max = Vector3.Maximize(max, meshMax);
    }

    // set parent bounding box
    parent.setBoundingInfo(new BoundingInfo(min, max));
    return parent;
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
          result = this.createParent(scene, meshName, visible, meshes);
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
            console.log('loaded', value);
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
