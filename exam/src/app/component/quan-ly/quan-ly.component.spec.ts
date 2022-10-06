import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyComponent } from './quan-ly.component';

describe('QuanLyComponent', () => {
  let component: QuanLyComponent;
  let fixture: ComponentFixture<QuanLyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
