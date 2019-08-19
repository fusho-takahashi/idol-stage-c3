import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCourseFieldComponent } from './drink-course-field.component';

describe('DrinkCourseFieldComponent', () => {
  let component: DrinkCourseFieldComponent;
  let fixture: ComponentFixture<DrinkCourseFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkCourseFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCourseFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
