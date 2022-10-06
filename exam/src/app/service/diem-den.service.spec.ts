import { TestBed } from '@angular/core/testing';

import { DiemDenService } from './diem-den.service';

describe('DiemDenService', () => {
  let service: DiemDenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiemDenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
