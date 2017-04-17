import { TestBed, inject } from '@angular/core/testing';

import { ReturnedUnitsService } from './returned-units.service';

describe('ReturnedUnitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnedUnitsService]
    });
  });

  it('should ...', inject([ReturnedUnitsService], (service: ReturnedUnitsService) => {
    expect(service).toBeTruthy();
  }));
});
