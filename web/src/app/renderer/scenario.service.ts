import { Injectable } from '@angular/core';
import {
  Scene,
  Color3,
  StandardMaterial,
  MeshBuilder,
  CubeTexture,
  Texture,
  Vector3,
} from '@babylonjs/core';
import { RunnerService } from '../coding/runner.service';
import { EditorService } from '../editor/editor.service';
import { CharacterService } from '../mesh/character.service';
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
    private editor: EditorService,
    private character: CharacterService,
    private runner: RunnerService
  ) {}

  addCharacter(engineState: EngineState, character: SceneElement) {
    const position = buildVector3(character.position);
    const rotation = buildVector3(character.rotation);
    engineState.character.position = position;
    engineState.character.rotation = rotation;
    engineState.character.checkCollisions = true;

    engineState.character.ellipsoid = new Vector3(1, 1, 1);
    //engineState.character.ellipsoidOffset = new Vector3(0, 2.5, 0);
  }

  buildRealm(engineState: EngineState): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const total = this.realm.getCurrentRealm().elements.length;
      console.info('Loading ' + total + ' elements');
      console.info('Scene BEFORE ', engineState.scene.meshes);

      // engineState.character = await this.character.load(engineState);
      engineState.character = this.mesh.getBox(engineState.scene);
      engineState.character.isVisible = true;

      const character = memento2SceneElement(
        this.realm.getCurrentRealm().character
      );
      this.addCharacter(engineState, character);

      const start = new Date().getTime();
      const createPromises = [];

      // add realm elements to the scene
      for (const memento of this.realm.getCurrentRealm().elements) {
        const element = memento2SceneElement(memento);

        console.log(
          'create element',
          element.componentID,
          element.name,
          element.position
        );

        await this.editor.create(engineState.scene, element);

        // if there is code definition register with runner
        if (memento.code) {
          this.runner.register(memento.name, memento.code.code);
        }
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

  ground(scene: Scene) {
    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 1000, height: 1000 },
      scene
    );
    const material = new StandardMaterial('ground-material', scene);

    material.diffuseColor = Color3.FromHexString('#564738');
    ground.material = material;
    ground.checkCollisions = true;
  }

  setup(scene: Scene) {
    this.ground(scene);
    this.skybox(scene);
  }
}
