import { TestBed } from '@angular/core/testing';

import { QuanLyService } from './quan-ly.service';

describe('QuanLyService', () => {
  let service: QuanLyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuanLyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
