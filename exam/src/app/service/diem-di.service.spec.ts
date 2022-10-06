import { TestBed } from '@angular/core/testing';

import { DiemDiService } from './diem-di.service';

describe('DiemDiService', () => {
  let service: DiemDiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiemDiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
