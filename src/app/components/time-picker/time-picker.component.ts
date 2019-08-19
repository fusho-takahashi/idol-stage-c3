import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  hour = 0;
  munite = 0;

  hours = {
    AM: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    PM: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  };

  selectedAmPm: 'AM' | 'PM';

  constructor() {}

  ngOnInit() {
    this.selectedAmPm = 'PM';
  }

  clearTime() {
    this.hour = 0;
    this.munite = 0;
  }
}
