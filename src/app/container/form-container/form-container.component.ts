import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { TimePickerService } from '../../components/time-picker/time-picker.service';
import { TimeService } from '../../services/time.service';
import { Time, TimeInfo, DrinkCourses, TimeType } from '../../domain/models';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  entranceTime$: Observable<Time | null> = this.timeService.entranceTime$;
  exitTime$: Observable<Time | null> = this.timeService.exitTime$;
  drinkCourse$ = this.timeService.drinkCourse$;

  constructor(
    private timeService: TimeService,
    private timePicker: TimePickerService,
  ) {}

  ngOnInit() {}

  formatTime(time: Time | null) {
    if (time === null) {
      return null;
    }

    return `${this.zeroPadding(time.hour, 2)}:${this.zeroPadding(
      time.minute,
      2,
    )}`;
  }
  zeroPadding(num: number, digit: number): string {
    return ('0'.repeat(digit) + num).slice(-digit);
  }

  openTimePicker(type: TimeType) {
    this.timePicker.open(type);
    this.timePicker.timePickFinish
      .pipe(take(1))
      .subscribe((timeInfo: TimeInfo) => {
        this.timeService.updateTime(timeInfo);
      });
  }

  changeDrinkCourse(course: DrinkCourses) {
    this.timeService.updateDrinkCourse(course);
  }
}
