import { Injectable } from '@angular/core';
import { StandardMaterial, Texture } from '@babylonjs/core';
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

    const material = new StandardMaterial(
      'character-texture',
      engineState.scene
    );

    const texture = new Texture(
      'assets/character/skins/skaterMaleA.png',
      engineState.scene,
    );

    material.diffuseTexture = texture;

    console.log('material', material);
    mesh.material = material;
  }
}
