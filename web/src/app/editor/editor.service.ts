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
import { EditorLibraryService } from './editor-library.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private current: LibraryComponent = PRIMITIVE_COMPONENT;
  private scene: Scene;

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

          let createdMesh: Mesh = null;
          console.log('pointer position', position);

          const element = <SceneElement>{
            name: uuidv4(),
            componentID: this.current.id,
            position: position,
            rotation: Vector3.Zero(),
          };

          this.create(element);

          // if (this.currentMesh) {
          //   createdMesh = await this.mesh.cloneAndAdd(
          //     scene,
          //     this.currentMesh,
          //     position,
          //     Vector3.Zero(),
          //     uuidv4()
          //   );
          // }

          // console.log('created mesh', createdMesh);
          // const element = mesh2SceneElement(createdMesh);
          // element.componentID = this.current.id;

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
  }

  async create(element: SceneElement) {
    console.log('create', element.name, element.position);

    const templateMesh = await this.library.getMesh(
      this.scene,
      element.componentID
    );

    console.log(
      'templateMesh',
      element.componentID,
      templateMesh.getBoundingInfo().boundingBox.maximum.y
    );

    const mesh = this.mesh.cloneMesh(
      this.scene,
      templateMesh,
      element.position,
      element.rotation,
      element.name
    );

    // updates position with the calculated position by the cloner
    element.position = mesh.position;
  }

  async add(element: SceneElement) {
    console.log('--- add', element.name, element.position);
    await this.create(element);
    console.log('--- add(2)', element.name, element.position);
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
