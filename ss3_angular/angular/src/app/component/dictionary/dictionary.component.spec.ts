import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistionaryComponent } from './dictionary.component';

describe('DistionaryComponent', () => {
  let component: DistionaryComponent;
  let fixture: ComponentFixture<DistionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
