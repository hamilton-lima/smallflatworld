import { Injectable } from '@angular/core';
import { Scene, Color3, StandardMaterial, MeshBuilder } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { MeshService } from './mesh.service';
import { EngineState } from './renderer.model';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  constructor(private mesh: MeshService, private realm: RealmService) {}

  buildRealm(engineState: EngineState): Promise<void> {
    return new Promise((resolve, reject) => {
      const total = this.realm.getCurrentRealm().elements.length;
      console.log('loading ' + total + ' elements');

      this.realm.getCurrentRealm().elements.forEach((element) => {
        try {
          console.log('loading', element);
          const mesh = this.mesh.addRotatedTallbox(
            engineState.scene,
            element.position,
            element.rotation,
            element.name
          );
        } catch (error) {
          reject(error);
        }
      });
      
      resolve();
    });
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
