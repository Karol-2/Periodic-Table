import { TestBed } from '@angular/core/testing';

import { PeriodicElementsService } from './periodic-elements.service';

describe('PeriodicElementsService', () => {
  let service: PeriodicElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
