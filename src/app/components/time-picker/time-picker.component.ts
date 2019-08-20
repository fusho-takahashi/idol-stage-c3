import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  selectedHour = 0;
  selectedMunite = 0;

  hours = {
    AM: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    PM: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  };

  minutes: number[] = Array.from(Array(60).keys());

  selectedAmPm: 'AM' | 'PM' = 'AM';

  constructor() {}

  ngOnInit() {}

  clearTime() {
    this.selectedHour = 0;
    this.selectedMunite = 0;
    this.selectedAmPm = 'AM';
  }

  selectAmPm(ampm) {
    if (ampm !== this.selectedAmPm) {
      this.selectedAmPm = ampm;
    }
  }

  selectHour(hour: number) {
    if (this.selectedHour !== hour) {
      this.selectedHour = hour;
    }
  }

  selectMinute(minute: number) {
    this.selectedMunite = minute;
  }
}
