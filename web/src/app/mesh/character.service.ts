import { Injectable } from '@angular/core';
import { Scene, StandardMaterial, Texture } from '@babylonjs/core';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { EngineState } from '../renderer/renderer.model';
import { MeshLoaderService } from './mesh-loader.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(
    private logger: NgxFancyLoggerService,
    private loader: MeshLoaderService
  ) {}

  async load(engineState: EngineState) {
    const mesh = await this.loader.load(
      engineState.scene,
      'character/model/characterMedium.glb',
      'characterMedium',
      true
    );
    console.log('mesh', mesh);

    const animations = await this.loader.loadAllAnimations(
      engineState.scene,
      'character/animations/run.glb',
      true
    );
    const run = animations[1];

    // oldTarget represents the name of the bone in the imported animation group
    // clone will use the provided function to search for the bone in the target mesh skeleton
    // and target the cloned animationGroup to the new bones.
    // the function will be called for each animation
    const newRun = run.clone('new-run', (oldTarget)=>{
      const target = mesh.skeleton.bones.filter( bone => bone.id == oldTarget.id );
      console.log('old target', oldTarget, target);
      return target;
    })
    newRun.start(true);

    console.log('animations', run.targetedAnimations[0].target);

    const material = new StandardMaterial(
      'character-texture',
      engineState.scene
    );

    const texture = new Texture(
      'assets/character/skins/skaterMaleA.png',
      engineState.scene
    );

    material.diffuseTexture = texture;

    console.log('material', material);
    mesh.material = material;
  }
}
