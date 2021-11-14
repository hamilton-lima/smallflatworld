import { Injectable } from '@angular/core';
import { Scene, Mesh, Vector3 } from '@babylonjs/core';
import { LibraryComponent } from '../editor/editor-library.model';
import { EditorLibraryService } from '../editor/editor-library.service';
import { v4 as uuidv4 } from 'uuid';
import { CodeDefinition } from '../../../../server/src/events.model';
import { RealmService } from '../realm/realm.service';
import { ClientService } from '../multiplayer/client.service';
import { sceneElement2Memento } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';
import { MeshService } from '../renderer/mesh.service';

@Injectable({
  providedIn: 'root',
})
export class SceneService {
  constructor(
    private library: EditorLibraryService,
    private realm: RealmService,
    private client: ClientService,
    private mesh: MeshService
  ) {}

  async create(scene: Scene, element: SceneElement): Promise<Mesh> {
    console.log('create', element.name, element.position.x, element.position.y, element.position.z);
    const templateMesh = await this.library.getMesh(
      scene,
      element.componentID,
      element.imageName,
      element.skipColision
    );

    const mesh = this.mesh.cloneMesh(
      scene,
      templateMesh,
      element.position,
      element.rotation,
      element.scaling,
      element.name
    );

    // updates position with the calculated position by the cloner
    element.position = mesh.position;
    return mesh;
  }

  async addFromLibraryComponent(
    scene: Scene,
    component: LibraryComponent,
    imageName: string,
    position: Vector3
  ): Promise<Mesh> {
    let skipColision = false;
    if (component.skipColision) {
      skipColision = true;
    }

    // only adds image to the model if the library component supports
    let image = '';
    if (component.supportImage) {
      image = imageName;
    }

    const element = <SceneElement>{
      name: uuidv4(),
      componentID: component.id,
      position: position,
      rotation: Vector3.Zero(),
      scaling: new Vector3(component.scale, component.scale, component.scale),
      code: new CodeDefinition(),
      imageName: image,
      skipColision: skipColision,
    };

    const mesh = await this.create(scene, element);

    // update local realm and send client event
    const memento = sceneElement2Memento(element);
    await this.realm.add(memento);
    this.client.update(memento);
    return mesh;
  }

  async addFromLibraryComponentID(
    scene: Scene,
    componentID: string,
    imageName: string,
    position: Vector3
  ): Promise<Mesh> {
    const component = this.library.getComponent(componentID);

    if (component) {
      return this.addFromLibraryComponent(
        scene,
        component,
        imageName,
        position
      );
    } else {
      console.warn('Unknown component ID to be created', componentID);
      return null;
    }
  }
}
