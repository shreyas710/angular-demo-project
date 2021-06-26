import { TestBed } from '@angular/core/testing';

import { AmazondataService } from './amazondata.service';

describe('AmazondataService', () => {
  let service: AmazondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
