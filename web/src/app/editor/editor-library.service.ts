import { Injectable } from '@angular/core';
import { AbstractMesh, Scene } from '@babylonjs/core';
import { MeshLoaderService } from '../mesh/mesh-loader.service';
import { MeshService } from '../renderer/mesh.service';
import {
  Library,
  LibraryComponent,
  PRIMITIVE_COMPONENT,
} from './editor-library.model';
import { kenneyLibrary } from './kenney.library';

@Injectable({
  providedIn: 'root',
})
export class EditorLibraryService {
  private cache: Map<string, AbstractMesh> = new Map();
  private components: Map<string, LibraryComponent> = new Map();

  constructor(private loader: MeshLoaderService, private mesh: MeshService) {
    this.setComponentNames();
  }

  setComponentNames() {
    this.components.set(PRIMITIVE_COMPONENT.id, PRIMITIVE_COMPONENT);

    kenneyLibrary.forEach((library) => {
      library.components.forEach((component) => {
        this.components.set(component.id, component);
      });
    });
  }

  getLibraries(): Library[] {
    return kenneyLibrary;
  }

  getComponent(componentID: string) {
    if (this.components.has(componentID)) {
      return this.components.get(componentID);
    } else {
      console.warn('componentID not found', componentID);
      // unknow componentID
      return PRIMITIVE_COMPONENT;
    }
  }

  // get Mesh based on componentID
  getMesh(scene: Scene, componentID: string): Promise<AbstractMesh> {
    return new Promise<AbstractMesh>((resolve, reject) => {
      const component = this.getComponent(componentID);

      let result = null;
      if (this.cache.has(component.id)) {
        const cached = this.cache.get(component.id);
        console.log('getmesh cached', component.id);
        resolve(cached);
      } else {
        // if primitive dont load, create the primitive box
        if (component.id == PRIMITIVE_COMPONENT.id) {
          const box = this.mesh.getBox(scene);
          console.log('getmesh created primitive', component.id);
          resolve(box);
        } else {
          // not present in the cache load the model
          this.loader
            .load(scene, component.model3D, component.name, false)
            .then((loaded) => {
              this.cache.set(component.id, loaded);
              console.log('getmesh loaded model', component.id);
              resolve(loaded);
            });
        }
      }
    });
  }
}
