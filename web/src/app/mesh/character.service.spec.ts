import { TestBed } from '@angular/core/testing';
import { Mesh } from '@babylonjs/core';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { CharacterService } from './character.service';
import { MeshLoaderService } from './mesh-loader.service';

xdescribe('CharacterService', () => {
  let service: CharacterService;
  let loader: MeshLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(CharacterService);
    loader = TestBed.inject(MeshLoaderService);

    spyOn(loader, 'load').and.returnValue(Promise.resolve(new Mesh('test')));
    spyOn(loader, 'loadAllAnimations').and.returnValue(Promise.resolve([]));
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
