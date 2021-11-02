import { TestBed } from '@angular/core/testing';

import { EventsBrokerService } from './events-broker.service';

describe('EventsBrokerService', () => {
  let service: EventsBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
