import { TestBed } from '@angular/core/testing';

import { BigbasketdataService } from './bigbasketdata.service';

describe('BigbasketdataService', () => {
  let service: BigbasketdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigbasketdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
