import { TestBed } from '@angular/core/testing';

import { AllEmployesService } from './all-employes.service';

describe('AllEmployesService', () => {
  let service: AllEmployesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllEmployesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
