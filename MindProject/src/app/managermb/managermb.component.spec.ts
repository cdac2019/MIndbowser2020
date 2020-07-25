import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagermbComponent } from './managermb.component';

describe('ManagermbComponent', () => {
  let component: ManagermbComponent;
  let fixture: ComponentFixture<ManagermbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagermbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagermbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
