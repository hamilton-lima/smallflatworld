import { TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';

import { SceneService } from './scene.service';

describe('SceneService', () => {
  let service: SceneService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(SceneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
