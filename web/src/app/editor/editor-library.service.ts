import { Injectable } from '@angular/core';
import { AbstractMesh, Scene } from '@babylonjs/core';
import { MeshLoaderService } from '../mesh/mesh-loader.service';
import { MeshService } from '../renderer/mesh.service';
import { Library, LibraryComponent } from './editor-library.model';
import { kenneyLibrary } from './kenney.library';
import { kaykitLibrary } from './kaykit.library';
import { basicShapesLibrary } from './basic-shapes.library';
import { InternalLibraryFactoryService } from './internal-library-factory.service';
import { RealmService } from '../realm/realm.service';

const INTERNAL = 'internal/';

@Injectable({
  providedIn: 'root',
})
export class EditorLibraryService {
  private static cache = [];

  private components: Map<string, LibraryComponent> = new Map();
  private libraries: Library[];

  constructor(
    private loader: MeshLoaderService,
    private mesh: MeshService,
    private internalFactory: InternalLibraryFactoryService,
    private realm: RealmService
  ) {
    this.mergeLibraries();
    this.setComponentNames();
  }

  mergeLibraries() {
    this.libraries = basicShapesLibrary.concat(kenneyLibrary); //.concat(kaykitLibrary);
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
    // search in the list of predefined components
    if (this.components.has(componentID)) {
      return this.components.get(componentID);
    } else {
      // search in the realm
      const found = this.realm
        .getCurrentRealm()
        .designs3D.get(componentID);
      if (found) {
        const libraryComponent = <LibraryComponent>{
          id: found.name,
          name: found.name,
          model3D: found.base64,
          scale: 1.0,
        };
        return libraryComponent;
      } else {
        console.warn('componentID not found', componentID);
        return null;
      }
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
  getMesh(
    scene: Scene,
    componentID: string,
    imageName: string
  ): Promise<AbstractMesh> {
    console.log('getMesh', componentID, this.cacheSize());

    return new Promise<AbstractMesh>((resolve, reject) => {
      const component = this.getComponent(componentID);
      console.log('component', component);
      // only if component exists
      if (!component) {
        const model = this.internalFactory.build(
          scene,
          componentID,
          'notfound',
          ''
        );

        resolve(model);
      }

      const cacheKey = component.id + imageName;
      if (this.isCached(cacheKey)) {
        const cached = this.getFromCache(cacheKey);
        console.log('getmesh cached', component.id, imageName, cached);
        resolve(cached);
      } else {
        if (component.id.startsWith(INTERNAL)) {
          // Uses internal factory to build the 3D model
          const model = this.internalFactory.build(
            scene,
            component.id,
            component.name,
            imageName
          );
          this.add2Cache(cacheKey, model);
          console.log(
            'getmesh build from the factory model',
            component.id,
            imageName
          );
          resolve(model);
        } else {
          // not present in the cache load the model
          this.loader
            .loadWithClickable(scene, component.model3D, component.name, false)
            .then((loaded) => {
              this.add2Cache(cacheKey, loaded);
              console.log('getmesh loaded model', component.id);
              resolve(loaded);
            });
        }
      }
    });
  }
}
