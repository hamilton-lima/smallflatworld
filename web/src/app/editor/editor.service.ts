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
import { LibraryComponent } from './editor-library.model';
import { EditorLibraryService } from './editor-library.service';
import { sceneElement2Memento, vector3ToMemento } from '../renderer/builders';
import { SceneElement } from '../renderer/renderer.model';
import { CameraService } from '../renderer/camera.service';
import {
  EditorAction,
  EditorMode,
  EditorModeService,
} from './editor-mode.service';
import {
  CodeDefinition,
  SceneElementMemento,
} from '../../../../server/src/events.model';
import { InputService } from '../shared/input.service';
import { CodingService } from '../coding/coding.service';
import { RunnerService } from '../coding/runner.service';
import { NotifyService } from '../shared/notify.service';
import { ImagesService } from '../library/images.service';

const POINTERDOWN = 'pointerdown';
const POINTERUP = 'pointerup';
const POINTERMOVE = 'pointermove';

const ROTATION_STEP = 0.2;
const SCALE_STEP = 0.2;
const MOVE_STEP = 0.2;
const VECTOR3_TWO = new Vector3(2.0, 2.0, 2.0);

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  dragging = false;

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

  async move(parent: Mesh) {
    if (parent) {
      const element = await this.realm.get(parent.name);
      if (element) {
        element.position = vector3ToMemento(parent.position);
        this.propagateUpdate(element);
      } else {
        console.warn('moving non existing element?');
      }
    } else {
      console.warn('called move without parent');
    }
  }

  async moveX(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.x += MOVE_STEP * this.signal(positive);
      this.move(parent);
    }
  }

  async moveY(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.z += MOVE_STEP * this.signal(positive);
      this.move(parent);
    }
  }

  async moveZ(positive: boolean) {
    if (this.selected) {
      // rotate the mesh
      let parent: Mesh = <Mesh>this.selected.parent;
      parent.position.y += MOVE_STEP * this.signal(positive);
      this.move(parent);
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

  async delete(found: AbstractMesh) {
    if (this.selected && this.selected.name) {
      this.selected = null;
    }
    found.dispose();

    await this.realm.delete(found.name);
  }

  async deleteSelected() {
    if (this.selected) {
      let parent: Mesh = <Mesh>this.selected.parent;
      if (parent) {
        this.client.delete(parent.name);
        this.delete(parent);
      } else {
        this.client.delete(this.selected.name);
        this.delete(this.selected);
      }
    }
  }

  editCode() {
    if (this.selected) {
      let parent: Mesh = <Mesh>this.selected.parent;
      if (parent) {
        this.coding.edit(parent.name);
      } else {
        this.coding.edit(this.selected.name);
      }
    }
  }

  async saveCode(uuid: string, code: CodeDefinition) {
    if (uuid) {
      const element = await this.realm.get(uuid);
      if (element) {
        element.code = code;
        this.propagateUpdate(element);
      }
    }
  }

  private current: LibraryComponent = null;
  private selected: Mesh;
  private dragPosition: Vector3;

  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private client: ClientService,
    private library: EditorLibraryService,
    private camera: CameraService,
    private editorMode: EditorModeService,
    private input: InputService,
    private coding: CodingService,
    private runner: RunnerService,
    private notify: NotifyService,
    private image: ImagesService
  ) {}

  getPointerPosition(scene: Scene): Vector3 {
    const pickinfo: PickingInfo = scene.pick(
      scene.pointerX,
      scene.pointerY,
      (mesh) => {
        return mesh.name == 'ground';
      }
    );
    return pickinfo.pickedPoint;
  }

  setup(scene: Scene): Scene {
    // when the mode changes reset selection and dragging state
    this.editorMode.mode.subscribe((mode) => {
      this.dragging = false;
    });

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
      // drag and drop
      if (this.editorMode.mode.value == EditorMode.EDIT) {
        if (pointerInfo.event.type == POINTERUP) {
          this.dragging = false;
          const parent: Mesh = <Mesh>this.selected.parent;
          this.move(parent);
        }

        if (pointerInfo.event.type == POINTERMOVE) {
          if (this.dragging && this.selected) {
            const parent: Mesh = <Mesh>this.selected.parent;

            if (parent) {
              const current = this.getPointerPosition(scene);
              const diff = current.subtract(this.dragPosition);
              // drag should not affect Y coord
              diff.y = 0;
              parent.position.addInPlace(diff);
              this.dragPosition = current;
            }
          }
        }
      }

      if (pointerInfo.pickInfo.pickedPoint) {
        if (pointerInfo.event.type == POINTERDOWN) {
          this.dragging = true;
          this.dragPosition = this.getPointerPosition(scene);

          console.log('pickInfo', pointerInfo);

          if (this.editorMode.mode.value == EditorMode.WALK) {
            this.click(scene, pointerInfo);
          }

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

  // facet is turned into a number between 0-10
  // 0 is positive Z
  // 2 is negative Z
  // 4 is positive X
  // 6 is negative X
  // 8 is positive Y
  // 10 is negative Y

  calcSnapPositionCenterOfCubeFace(
    faceId: number,
    mesh: Mesh,
    size2Snap: Vector3
  ): Vector3 {
    if (!mesh) {
      return null;
    }

    const size = mesh.getBoundingInfo().boundingBox.extendSize;
    //size.divideInPlace(VECTOR3_TWO);
    const snap = size2Snap.multiply(VECTOR3_TWO);

    var facet = faceId / 2;
    var fase = Math.floor(facet);
    const position = mesh.position.clone();

    if (fase == 0) {
      position.z += size.z + snap.z;
      return position;
    }

    if (fase == 1) {
      position.z -= size.z + snap.z;
      return position;
    }

    if (fase == 2) {
      position.x += size.x + snap.x;
      return position;
    }

    if (fase == 3) {
      position.x -= size.x + snap.x;
      return position;
    }

    if (fase == 4) {
      position.y += size.y + snap.y;
      return position;
    }

    if (fase == 5) {
      position.y -= size.y + snap.y;
      return position;
    }
  }

  showBoundingBox(show: boolean) {
    this.selected.showBoundingBox = show;
  }

  click(scene: Scene, pointerInfo: PointerInfo) {
    if (this.selected) {
      this.showBoundingBox(false);
    }

    this.selected = <Mesh>pointerInfo.pickInfo.pickedMesh;
    this.showBoundingBox(true);

    let parent: Mesh = <Mesh>this.selected.parent;
    if (parent) {
      this.runner.click(parent.name);
    } else {
      this.runner.click(this.selected.name);
    }
  }

  select(scene: Scene, pointerInfo: PointerInfo) {
    if (this.selected) {
      this.showBoundingBox(false);
    }

    this.selected = <Mesh>pointerInfo.pickInfo.pickedMesh;
    this.showBoundingBox(true);
  }

  async addToPosition(scene: Scene, pointerInfo: PointerInfo) {
    if (!this.current) {
      this.notify.warn(
        "Err... I don't know what to add to the scene... select from the " +
          'Library on the left.'
      );
      return;
    }

    const faceId = pointerInfo.pickInfo.faceId;
    let picked = <Mesh>pointerInfo.pickInfo.pickedMesh;
    const imageName = this.image.getCurrentImageName();
    
    let skipColision = false;
    if( this.current.skipColision ){
      skipColision = true;
    }

    console.log('skipColision editor', skipColision);
    const templateMesh = await this.library.getMesh(
      scene,
      this.current.id,
      imageName,
      skipColision
    );
    const dimensions = templateMesh.getBoundingInfo().boundingBox.extendSize;
    let position: Vector3;

    // if picking ground add to the clicking position
    if (picked.name == 'ground') {
      position = pointerInfo.pickInfo.pickedPoint;
    } else {
      if (picked.parent) {
        picked = <Mesh>picked.parent;
      }

      console.log('picked', picked);

      position = this.calcSnapPositionCenterOfCubeFace(
        faceId,
        picked,
        dimensions
      );
    }

    // only adds image to the model if the library component supports
    let image = '';
    if (this.current.supportImage) {
      image = imageName;
    }

    const element = <SceneElement>{
      name: uuidv4(),
      componentID: this.current.id,
      position: position,
      rotation: Vector3.Zero(),
      scaling: new Vector3(
        this.current.scale,
        this.current.scale,
        this.current.scale
      ),
      code: new CodeDefinition(),
      imageName: image,
      skipColision: skipColision,
    };

    await this.create(scene, element);

    // update local realm and send client event
    const memento = sceneElement2Memento(element);
    await this.realm.add(memento);
    this.client.update(memento);
  }

  async setCurrent(component: LibraryComponent) {
    this.current = component;
    this.editorMode.mode.next(EditorMode.ADD);
    this.input.focus();
    console.log('current', component);
  }

  getCurrent() {
    return this.current;
  }

  async create(scene: Scene, element: SceneElement) {
    console.log('create', element.name, element.position);
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
