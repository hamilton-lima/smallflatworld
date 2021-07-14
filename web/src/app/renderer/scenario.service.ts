import { Injectable } from '@angular/core';
import { Scene, Color3, StandardMaterial, MeshBuilder, Vector3 } from '@babylonjs/core';
import { RealmService } from '../realm/realm.service';
import { MeshService } from './mesh.service';
import { EngineState } from './renderer.model';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  constructor(private mesh: MeshService, private realm: RealmService) {}

  buildRealm(engineState: EngineState): Promise<void> {
    return new Promise((resolve) => {
      const total = this.realm.getCurrentRealm().elements.length;
      console.log('loading ' + total + ' elements');
      console.log('elements', this.realm.getCurrentRealm().elements);

      
      this.realm.getCurrentRealm().elements.forEach((element) => {
          console.log('loading', element);
          const position = this.buildVector3(element.position);
          const rotation = this.buildVector3(element.rotation);

          const mesh = this.mesh.addRotatedTallbox(
            engineState.scene,
            position,
            rotation,
            element.name
          );
          console.log('mesh', mesh);
      });
      resolve();
    });
  }

  buildVector3(vector3: Vector3) {
    return new Vector3(vector3.x, vector3.y, vector3.z);
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
