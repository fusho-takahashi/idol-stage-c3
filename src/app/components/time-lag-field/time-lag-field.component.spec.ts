import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLagFieldComponent } from './time-lag-field.component';

describe('TimeLagFieldComponent', () => {
  let component: TimeLagFieldComponent;
  let fixture: ComponentFixture<TimeLagFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLagFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLagFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
