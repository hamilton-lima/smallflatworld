import { Injectable } from '@angular/core';
import { Scene, Color3, StandardMaterial, MeshBuilder } from '@babylonjs/core';
import { EditorService } from '../editor/editor.service';
import { SceneElement } from '../persistence/persistence.model';
import { RealmService } from '../realm/realm.service';
import { buildVector3 } from './builders';
import { MeshService } from './mesh.service';
import { EngineState } from './renderer.model';

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
    return new Promise((resolve) => {
      const total = this.realm.getCurrentRealm().elements.length;
      console.info('Loading ' + total + ' elements');

      const character = this.realm.getCurrentRealm().character;
      engineState.character = this.addCharacter(engineState.scene, character);

      const createPromises = [];
      // add realm elements to the scene
      this.realm.getCurrentRealm().elements.forEach((element) => {
        console.log(
          'create element',
          element.componentID,
          element.name,
          element.position
        );
        createPromises.push(this.editor.create(element));
      });
      
      Promise.all(createPromises).then(
        () => {
          console.log('finish building realm');
          resolve();
        },
        (error) => {
          console.error('Error creating objects', error);
        }
      );
    });
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
