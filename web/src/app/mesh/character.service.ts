import { Injectable } from '@angular/core';
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

  load(engineState: EngineState) {
    const texture = this.loader.loadAllMeshes(
      engineState.scene,
      'character/model/characterMedium.glb',
      true
    );
    
  }
}
