import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  PointerInfo,
  PointerInfoPre,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';
import { RealmService } from '../realm/realm.service';
import { v4 as uuidv4 } from 'uuid';
import { ClientService } from '../multiplayer/client.service';
import { LibraryComponent, PRIMITIVE_COMPONENT } from './editor-library.model';
import { EditorLibraryService } from './editor-library.service';
import { sceneElement2Memento } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';
import { CameraService } from '../renderer/camera.service';
import { EditorMode, EditorModeService } from './editor-mode.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private current: LibraryComponent = PRIMITIVE_COMPONENT;
  private selected: AbstractMesh;

  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private client: ClientService,
    private library: EditorLibraryService,
    private camera: CameraService,
    private editorMode: EditorModeService
  ) {}

  setup(scene: Scene): Scene {
    // handles mouse wheel
    scene.onPrePointerObservable.add(
      (pointerInfo: PointerInfoPre, eventState) => {
        const wheelDelta = pointerInfo.event['wheelDelta'];
        if (wheelDelta > 0) {
          this.camera.zoomIn();
        }
        if (wheelDelta < 0) {
          this.camera.zoomOut();
        }
      }
    );

    scene.onPointerObservable.add(async (pointerInfo) => {
      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          console.log('pickInfo', pointerInfo);
          if (this.editorMode.mode == EditorMode.ADD) {
            await this.addToPosition(scene, pointerInfo);
          }

          if (this.editorMode.mode == EditorMode.EDIT) {
            this.select(scene, pointerInfo);
          }
        }
      }
    });

    return scene;
  }

  select(scene: Scene, pointerInfo: PointerInfo) {
    if (this.selected) {
      this.selected.showBoundingBox = false;
    }

    this.selected = pointerInfo.pickInfo.pickedMesh;
    this.selected.showBoundingBox = true;
  }

  async addToPosition(scene: Scene, pointerInfo: PointerInfo) {
    const position = pointerInfo.pickInfo.pickedPoint;

    // allow to stack elements
    const boundingBox =
      pointerInfo.pickInfo.pickedMesh.getBoundingInfo().boundingBox;
    position.y = boundingBox.maximumWorld.y;

    const element = <SceneElement>{
      name: uuidv4(),
      componentID: this.current.id,
      position: position,
      rotation: Vector3.Zero(),
    };

    await this.create(scene, element);

    // update local realm and send client event
    const memento = sceneElement2Memento(element);
    await this.realm.add(memento);
    this.client.update(memento);
  }

  async setCurrent(component: LibraryComponent) {
    this.current = component;
    console.log('current', component);
  }

  async create(scene: Scene, element: SceneElement) {
    console.log('create', element.name, element.position);
    const templateMesh = await this.library.getMesh(scene, element.componentID);

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
    const memento = sceneElement2Memento(element);
    this.realm.add(memento);
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
