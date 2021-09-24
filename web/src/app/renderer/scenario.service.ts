import { Injectable } from '@angular/core';
import {
  Scene,
  Color3,
  StandardMaterial,
  MeshBuilder,
  CubeTexture,
  Texture,
} from '@babylonjs/core';
import { EditorService } from '../editor/editor.service';
import { RealmService } from '../realm/realm.service';
import { buildVector3, memento2SceneElement } from './builders';
import { MeshService } from './mesh.service';
import { EngineState, SceneElement } from './renderer.model';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  constructor(
    private mesh: MeshService,
    private realm: RealmService,
    private editor: EditorService
  ) {}

  buildRealm(engineState: EngineState): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const total = this.realm.getCurrentRealm().elements.length;
      console.info('Loading ' + total + ' elements');
      console.info('Scene BEFORE ', engineState.scene.meshes);

      const character = memento2SceneElement(
        this.realm.getCurrentRealm().character
      );
      engineState.character = this.addCharacter(engineState.scene, character);

      // add skybox
      this.skybox(engineState.scene);

      const start = new Date().getTime();
      const createPromises = [];

      // add realm elements to the scene
      for(const memento of this.realm.getCurrentRealm().elements) {
        const element = memento2SceneElement(memento);

        console.log(
          'create element',
          element.componentID,
          element.name,
          element.position
        );

        await this.editor.create(engineState.scene, element);
      }

      const elapsed = new Date().getTime() - start;
      console.log('Finish building realm, elapsed', elapsed);
      resolve();
    });
  }

  skybox(scene: Scene) {
    var skybox = MeshBuilder.CreateBox('skyBox', { size: 1000.0 }, scene);
    var skyboxMaterial = new StandardMaterial('skyBox', scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new CubeTexture(
      'assets/skyboxes/blue-sky/skybox',
      scene
    );

    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
    skyboxMaterial.specularColor = new Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
  }

  addCharacter(scene: Scene, character: SceneElement) {
    const position = buildVector3(character.position);
    const rotation = buildVector3(character.rotation);

    return this.mesh.addRotatedBox(scene, position, rotation, character.name);
  }

  setup(scene: Scene) {
    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 1000, height: 1000 },
      scene
    );
    const material = new StandardMaterial('ground-material', scene);

    material.diffuseColor = Color3.FromHexString('#7C6650');
    ground.material = material;

    return ground;
  }
}
