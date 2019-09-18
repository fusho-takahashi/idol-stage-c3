import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DrinkCourses } from 'src/app/domain/models';

@Component({
  selector: 'app-drink-course-field',
  templateUrl: './drink-course-field.component.html',
  styleUrls: ['./drink-course-field.component.scss'],
})
export class DrinkCourseFieldComponent implements OnInit {
  readonly drinkCourses = [
    { id: 0, value: 'soft', label: 'ソフトドリンク' },
    { id: 1, value: 'alcohol', label: 'アルコール' },
  ];

  @Input() selectedValue: DrinkCourses;
  @Output() selectedValueChange = new EventEmitter<DrinkCourses>();

  selectedDrinkCourse: DrinkCourses;
  constructor() {}

  ngOnInit() {
    this.selectedDrinkCourse = this.selectedValue;
  }
}
