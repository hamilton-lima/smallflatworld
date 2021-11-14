import { TestBed } from '@angular/core/testing';

import { BlocklyDefaultToolboxService } from './blockly-default-toolbox.service';

describe('BlocklyDefaultToolboxService', () => {
  let service: BlocklyDefaultToolboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocklyDefaultToolboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
