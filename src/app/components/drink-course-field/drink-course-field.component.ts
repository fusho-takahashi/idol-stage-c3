import { Component, OnInit } from '@angular/core';

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
  selectedDrinkCourse: 'soft' | 'alcohol' = 'soft';
  constructor() {}

  ngOnInit() {}
}
