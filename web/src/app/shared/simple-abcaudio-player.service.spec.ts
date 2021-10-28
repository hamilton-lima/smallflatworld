import { TestBed } from '@angular/core/testing';

import { SimpleABCAudioPlayerService } from './simple-abcaudio-player.service';

describe('SimpleABCAudioPlayerService', () => {
  let service: SimpleABCAudioPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleABCAudioPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
