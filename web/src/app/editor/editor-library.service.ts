import { Injectable } from '@angular/core';
import { AbstractMesh, Scene } from '@babylonjs/core';
import { MeshLoaderService } from '../mesh/mesh-loader.service';
import { MeshService } from '../renderer/mesh.service';
import { Library, LibraryComponent } from './editor-library.model';
import { kenneyLibrary } from './kenney.library';
import { kaykitLibrary } from './kaykit.library';

@Injectable({
  providedIn: 'root',
})
export class EditorLibraryService {
  private static cache = [];

  private components: Map<string, LibraryComponent> = new Map();
  private libraries: Library[];

  constructor(private loader: MeshLoaderService, private mesh: MeshService) {
    this.mergeLibraries();
    this.setComponentNames();
  }

  mergeLibraries() {
    this.libraries = kenneyLibrary.concat(kaykitLibrary);
  }

  setComponentNames() {
    this.libraries.forEach((library) => {
      library.components.forEach((component) => {
        this.components.set(component.id, component);
      });
    });
  }

  getLibraries(): Library[] {
    return this.libraries;
  }

  getComponent(componentID: string) {
    if (this.components.has(componentID)) {
      return this.components.get(componentID);
    } else {
      console.warn('componentID not found', componentID);
      return null;
    }
  }

  isCached(componentID: string) {
    const result = EditorLibraryService.cache[componentID];
    console.log('inner: is cached', componentID, result);
    return result;
  }

  add2Cache(componentID: string, mesh: AbstractMesh) {
    console.log('inner: set cache', componentID);
    EditorLibraryService.cache[componentID] = mesh;
  }

  getFromCache(componentID: string): AbstractMesh {
    const result = EditorLibraryService.cache[componentID];
    console.log('inner:get from cache', componentID, result);
    return result;
  }

  cacheSize() {
    return EditorLibraryService.cache.entries.length;
  }

  // get Mesh based on componentID
  getMesh(scene: Scene, componentID: string): Promise<AbstractMesh> {
    console.log('getMesh', componentID, this.cacheSize());

    return new Promise<AbstractMesh>((resolve, reject) => {
      const component = this.getComponent(componentID);
      console.log('component', component);
      // only if component exists
      if (!component) {
        resolve(this.mesh.getBox(scene));
      }

      if (this.isCached(component.id)) {
        const cached = this.getFromCache(component.id);
        console.log('getmesh cached', component.id, cached);
        resolve(cached);
      } else {
        // not present in the cache load the model
        this.loader
          .loadWithClickable(scene, component.model3D, component.name, false)
          .then((loaded) => {
            this.add2Cache(component.id, loaded);
            console.log('getmesh loaded model', component.id);
            resolve(loaded);
          });
      }
    });
  }
}
