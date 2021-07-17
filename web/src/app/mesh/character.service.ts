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
    // experiment 1
    // run.start(true);

    // experiment 2
    // const newRun = run.clone('new-run', ()=>{
    //   return mesh;
    // })
    // newRun.start(true);

    // experiment 3
    // run.targetedAnimations.forEach( (animation)=>{
    //   animation.target = mesh.skeleton;
    // })
    // run.start(true);

    // experiment 4
    // run.targetedAnimations.forEach((animation) => {
    //   animation.target = mesh;
    // });
    // run.start(true);

    // check playAnimation() https://playground.babylonjs.com/#9CLJEF

    console.log('animations', run.targetedAnimations[0].target);

    // console.log('animations', run.targetedAnimations, run.targetedAnimations[0].target);

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
