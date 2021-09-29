import { Injectable } from '@angular/core';
import {
  AbstractMesh,
  AnimationGroup,
  IParticleSystem,
  Mesh,
  SceneLoader,
  Skeleton,
  StandardMaterial,
  Texture,
} from '@babylonjs/core';
import { EngineState } from '../renderer/renderer.model';
import { MeshLoaderService } from './mesh-loader.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private loader: MeshLoaderService) {}

  async load(engineState: EngineState) {
    const loaded = await SceneLoader.ImportMeshAsync(
      '',
      'assets/',
      'library/kaykit/kayyit-dungeon-pack-1/characters/character_barbarian.gltf',
      engineState.scene
    );

    const animations = await this.loader.loadAllAnimations(
      engineState.scene,
      'library/kaykit/kayyit-dungeon-pack-1/animations/Jump.glb',
      true
    );

    const cheer = animations[0];
    console.log('animations', animations, cheer);
    console.log('loaded', loaded);

    if (cheer) {
      console.log('clone animation');
      // oldTarget represents the name of the bone in the imported animation group
      // clone will use the provided function to search for the bone in the target mesh skeleton
      // and target the cloned animationGroup to the new bones.
      // the function will be called for each animation
      const newRun = cheer.clone('new-animation', (oldTarget) => {
        let target;
        console.log('search oldTarget', oldTarget.id);
        // search for all nodes in the tranform nodes
        for (let node of loaded.transformNodes) {
          console.log('node', node.id);
          if (node.id.toLowerCase().includes(oldTarget.id.toLowerCase())) {
            console.log('found', node.id);
            target = node;
            break;
          }
        }

        return target;
      });

      console.log('cloned animation', newRun);
      // FIX THIS: NOT WORKING
      // newRun.start(true);
    }

    // const material = new StandardMaterial(
    //   'character-texture',
    //   engineState.scene
    // );

    // const texture = new Texture(
    //   'assets/character/skins/skaterMaleA.png',
    //   engineState.scene
    // );

    // material.diffuseTexture = texture;
    // mesh.material = material;
  }

  async loadOld(engineState: EngineState) {
    const mesh = await this.loader.load(
      engineState.scene,
      'character/model/characterMedium.glb',
      'characterMedium',
      true
    );

    const animations = await this.loader.loadAllAnimations(
      engineState.scene,
      'character/animations/run.glb',
      true
    );
    console.log('animations', animations);

    const run = animations[1];
    if (run) {
      // oldTarget represents the name of the bone in the imported animation group
      // clone will use the provided function to search for the bone in the target mesh skeleton
      // and target the cloned animationGroup to the new bones.
      // the function will be called for each animation
      const newRun = run.clone('new-run', (oldTarget) => {
        const target = mesh.skeleton.bones.filter(
          (bone) => bone.id == oldTarget.id
        );
        return target;
      });
      newRun.start(true);
    }

    const material = new StandardMaterial(
      'character-texture',
      engineState.scene
    );

    const texture = new Texture(
      'assets/character/skins/skaterMaleA.png',
      engineState.scene
    );

    material.diffuseTexture = texture;
    mesh.material = material;
  }
}
