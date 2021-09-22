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
  AbstractMesh,
} from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';
import { mesh2SceneElement } from '../renderer/builders';
import { SceneElement } from '../persistence/persistence.model';
import { ClientService } from '../multiplayer/client.service';
import { LibraryComponent, PRIMITIVE_COMPONENT } from './editor-library.model';
import { MeshLoaderService } from '../mesh/mesh-loader.service';
import { CharacterService } from '../mesh/character.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private current: LibraryComponent = PRIMITIVE_COMPONENT;
  private currentMesh: AbstractMesh;
  private scene: Scene;

  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private client: ClientService,
    private loader: MeshLoaderService,
  ) {}

  setup(scene: Scene): Scene {
    this.currentMesh = this.mesh.getBox(scene);

    scene.onPointerObservable.add(async (pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          const position = pointerInfo.pickInfo.pickedPoint;
          // allow to stack elements
          position.y = pointerInfo.pickInfo.pickedMesh.getBoundingInfo().boundingBox.maximumWorld.y;

          let createdMesh: Mesh = null;
          console.log('pointer position', position);
          if (this.currentMesh) {
            createdMesh = await this.mesh.cloneAndAdd(
              scene,
              this.currentMesh,
              position,
              Vector3.Zero(),
              uuidv4()
            );

          } 
          // else {
          //   createdMesh = this.mesh.addTallbox(scene, position, uuidv4());
          // }

          console.log('created mesh', createdMesh);
          const element = mesh2SceneElement(createdMesh);

          // update local realm and send client event
          this.realm.add(element);
          this.client.update(element);
        }
      }
    });

    this.scene = scene;
    return scene;
  }

  async setCurrent(component: LibraryComponent) {
    this.current = component;
    console.log('current', component);

    this.currentMesh = await this.loader.load(
      this.scene,
      component.model3D,
      component.name,
      false
    );
    console.log('mesh', this.currentMesh);
  }

  // TODO: use different mesh based on the sceneElement Type
  add(element: SceneElement) {
    console.log('add', element.name, element.position);
    const mesh = this.mesh.addRotatedTallbox(
      this.scene,
      element.position,
      element.rotation,
      element.name
    );
    this.realm.add(element);
  }

  update(element: SceneElement) {
    console.log('update', element.name, element.position);
    const mesh = this.scene.getMeshByName(element.name);
    if (mesh) {
      // TODO: Apply smooth update or transition
      mesh.position = element.position;
      mesh.rotation = element.rotation;
    }
  }
}
