import { Injectable } from '@angular/core';
import { Scene, Vector3 } from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';
import { SceneElement } from '../persistence/persistence.model';
import { ClientService } from '../multiplayer/client.service';
import { LibraryComponent, PRIMITIVE_COMPONENT } from './editor-library.model';
import { EditorLibraryService } from './editor-library.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private current: LibraryComponent = PRIMITIVE_COMPONENT;

  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private client: ClientService,
    private library: EditorLibraryService
  ) {}

  setup(scene: Scene): Scene {
    scene.onPointerObservable.add(async (pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          const position = pointerInfo.pickInfo.pickedPoint;

          // allow to stack elements
          const boundingBox =
            pointerInfo.pickInfo.pickedMesh.getBoundingInfo().boundingBox;
          position.y = boundingBox.maximumWorld.y;

          console.log('pointer position', position);

          const element = <SceneElement>{
            name: uuidv4(),
            componentID: this.current.id,
            position: position,
            rotation: Vector3.Zero(),
          };

          await this.create(scene, element);

          // update local realm and send client event
          this.realm.add(element);
          this.client.update(element);
        }
      }
    });

    return scene;
  }

  async setCurrent(component: LibraryComponent) {
    this.current = component;
    console.log('current', component);
  }

  async create(scene: Scene, element: SceneElement) {
    console.log('create', element.name, element.position);

    const templateMesh = await this.library.getMesh(scene, element.componentID);

    console.log(
      'templateMesh',
      element.componentID,
      templateMesh.getBoundingInfo().boundingBox.maximum.y
    );

    const mesh = this.mesh.cloneMesh(
      scene,
      templateMesh,
      element.position,
      element.rotation,
      element.name
    );

    // updates position with the calculated position by the cloner
    element.position = mesh.position;
  }

  async add(scene: Scene, element: SceneElement) {
    await this.create(scene, element);
    console.log('add', element.name, element.position);
    this.realm.add(element);
  }

  update(scene: Scene, element: SceneElement) {
    console.log('update', element.name, element.position);
    const mesh = scene.getMeshByName(element.name);
    if (mesh) {
      // TODO: Apply smooth update or transition
      mesh.position = element.position;
      mesh.rotation = element.rotation;
    }
  }
}
