import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  Mesh,
  PickingInfo,
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
import { SceneElementMemento } from '../../../../server/src/events.model';

const POINTERDOWN = 'pointerdown';
const ROTATION_STEP = 0.2;
const SCALE_STEP = 0.2;
const MOVE_STEP = 0.2;

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

    if (action == EditorAction.SCALE) {
      this.scale(positive);
    }

    if (action == EditorAction.MOVEX) {
      this.moveX(positive);
    }

    if (action == EditorAction.MOVEY) {
      this.moveY(positive);
    }

    if (action == EditorAction.MOVEZ) {
      this.moveZ(positive);
    }
  }

  signal(positive: boolean) {
    if (positive) {
      return 1;
    }
    return -1;
  }

  // propagate the update to realm and multiplayer
  async propagateUpdate(element: SceneElementMemento) {
    await this.realm.update(element);
    this.client.update(element);
  }

  async rotate(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.rotation.y += ROTATION_STEP * this.signal(positive);

      const element = await this.realm.get(this.selected.parent.name);
      element.rotation = vector3ToMemento(parent.rotation);
      this.propagateUpdate(element);
    }
  }

  async scale(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      const scale = new Vector3(
        SCALE_STEP * this.signal(positive),
        SCALE_STEP * this.signal(positive),
        SCALE_STEP * this.signal(positive)
      );
      parent.scaling.addInPlace(scale);

      const element = await this.realm.get(this.selected.parent.name);
      element.scaling = vector3ToMemento(parent.scaling);
      this.propagateUpdate(element);
    }
  }

  async moveX(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.x += MOVE_STEP * this.signal(positive);

      const element = await this.realm.get(this.selected.parent.name);
      element.position = vector3ToMemento(parent.position);
      this.propagateUpdate(element);
    }
  }

  async moveY(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.z += MOVE_STEP * this.signal(positive);

      const element = await this.realm.get(this.selected.parent.name);
      element.position = vector3ToMemento(parent.position);
      this.propagateUpdate(element);
    }
  }

  async moveZ(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.y += MOVE_STEP * this.signal(positive);

      const element = await this.realm.get(this.selected.parent.name);
      element.position = vector3ToMemento(parent.position);
      this.propagateUpdate(element);
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
      this.onMouse(scene, pointerInfo);
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

  onMouse(scene, pointerInfo: PointerInfo) {
    const picked:PickingInfo = scene.pick(scene.pointerX, scene.pointerY);
    // console.log('touched mesh (1)',picked);

    if (picked.pickedMesh) {
      console.log('touched mesh', picked.faceId);
    }
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
      scaling: Vector3.One(),
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
      element.scaling,
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
      mesh.scaling = element.scaling;
    }
  }
}
