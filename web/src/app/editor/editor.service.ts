import { Injectable } from '@angular/core';
import {
  Scene,
  Mesh,
  Color3,
  StandardMaterial,
  MeshBuilder,
  FollowCamera,
  Camera,
  Vector3,
} from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';
import { mesh2SceneElement } from '../renderer/builders';
import { SceneElement } from '../persistence/persistence.model';
import { ClientService } from '../multiplayer/client.service';
import { LibraryComponent } from './editor-library.model';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  // TODO: set default
  private current: LibraryComponent;

  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private client: ClientService
  ) {}

  setup(scene: Scene): Scene {
    scene.onPointerObservable.add((pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          const position = pointerInfo.pickInfo.pickedPoint;
          position.y = 1;
          const mesh = this.mesh.addTallbox(scene, position, uuidv4());
          const element = mesh2SceneElement(mesh);

          // update local realm and send client event
          this.realm.add(element);
          this.client.update(element);
        }
      }
    });

    return scene;
  }

  setCurrent(component: LibraryComponent) {
    this.current = component;
  }

  // TODO: use different mesh based on the sceneElement Type
  add(scene: Scene, element: SceneElement) {
    console.log('add', element.name, element.position);
    const mesh = this.mesh.addRotatedTallbox(
      scene,
      element.position,
      element.rotation,
      element.name
    );
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
