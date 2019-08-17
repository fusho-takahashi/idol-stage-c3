import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  readonly drinkCourses = [
    { id: 0, value: 'soft', label: 'ソフトドリンク' },
    { id: 1, value: 'alcohol', label: 'アルコール' },
  ];

  selectedDrinkCourse: 'soft' | 'alcohol' = 'soft';
  constructor() {}

  ngOnInit() {}
}
