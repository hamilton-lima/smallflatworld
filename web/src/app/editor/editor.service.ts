import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  Mesh,
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
import { sceneElement2Memento, vector3ToMemento } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';
import { CameraService } from '../renderer/camera.service';
import {
  EditorAction,
  EditorMode,
  EditorModeService,
} from './editor-mode.service';

const POINTERDOWN = 'pointerdown';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  executeEditAction(action: EditorAction, positive: boolean) {
    console.log(
      'Execute action',
      this.editorMode.mode.value,
      this.editorMode.editAction.value,
      positive
    );

    if (action == EditorAction.ROTATE) {
      this.rotate(positive);
    }
  }

  signal(positive: boolean) {
    if (positive) {
      return 1;
    }
    return -1;
  }

  async rotate(positive: boolean) {
    if (this.selected) {
      
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      // Meshes loaded with no parent
      if (!parent) {
        parent = this.selected;
      }
      parent.rotation.y += 0.2 * this.signal(positive);

      // get current realm element
      const element = await this.realm.get(this.selected.parent.name);
      element.rotation = vector3ToMemento(parent.rotation);

      // propagate the update to realm and multiplayer
      await this.realm.update(element);
      this.client.update(element);
    }
  }

  editPlus() {
    if (this.editorMode.mode.value == EditorMode.EDIT) {
      this.executeEditAction(this.editorMode.editAction.value, true);
    }
  }

  editMinus() {
    if (this.editorMode.mode.value == EditorMode.EDIT) {
      this.executeEditAction(this.editorMode.editAction.value, false);
    }
  }

  private current: LibraryComponent = PRIMITIVE_COMPONENT;
  private selected: Mesh;

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
          if (this.editorMode.mode.value == EditorMode.ADD) {
            await this.addToPosition(scene, pointerInfo);
          }

          if (this.editorMode.mode.value == EditorMode.EDIT) {
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

    this.selected = <Mesh>pointerInfo.pickInfo.pickedMesh;
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
