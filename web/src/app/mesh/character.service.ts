import { Injectable } from '@angular/core';
import { ISceneLoaderAsyncResult, Mesh, SceneLoader, StandardMaterial, Texture } from '@babylonjs/core';
import { CharacterAnimations, EngineState } from '../renderer/renderer.model';
import { MeshLoaderService } from './mesh-loader.service';

export class CharacterAndAnimations {
  character: Mesh;
  animations: CharacterAnimations;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private loader: MeshLoaderService) { }

  async load(engineState: EngineState): Promise<CharacterAndAnimations> {
    const result = this.loadAnimated(engineState);
    return result;
    // return this.loadModelOnly(engineState);
  }

  async loadModelOnly(engineState: EngineState): Promise<Mesh> {
    const mesh = await this.loader.load(
      engineState.scene,
      'library/kaykit/kayyit-dungeon-pack-1/characters/character_barbarian.gltf',
      'character_barbarian',
      true
    );

    return <Mesh>mesh;
  }

  async loadAnimated(engineState: EngineState): Promise<CharacterAndAnimations> {
    const loaded: ISceneLoaderAsyncResult = await SceneLoader.ImportMeshAsync(
      '',
      'assets/',
      'library/kaykit/kayyit-dungeon-pack-1/characters/character_barbarian.glb',
      engineState.scene
    );

    const jump = await this.loader.loadAnimation(
      engineState.scene, loaded,
      'library/kaykit/kayyit-dungeon-pack-1/animations/jump.glb',
      true
    );

    const walk = await this.loader.loadAnimation(
      engineState.scene, loaded,
      'library/kaykit/kayyit-dungeon-pack-1/animations/walk.glb',
      true
    );

    const result = <CharacterAndAnimations>{
      character: <Mesh>loaded.meshes[0],
      animations: <CharacterAnimations>{
        jump: jump,
        walk: walk
      }
    }

    return result;
  }

}
