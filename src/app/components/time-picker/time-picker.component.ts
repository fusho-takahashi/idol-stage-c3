import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Inject,
  EventEmitter,
} from '@angular/core';

import { HOUR, MINUTE } from './time-picker.token';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit, AfterViewInit {
  selectedHour = 0;
  selectedMinute = 0;

  hours = {
    AM: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    PM: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  };

  minutes: number[] = Array.from(Array(60).keys());

  selectedAmPm: 'AM' | 'PM' = 'AM';

  @ViewChild('minuteSlider', { static: true }) minuteSlider: ElementRef<
    HTMLElement
  >;

  pickerClose = new EventEmitter<{ hour: number; minute: number }>();

  constructor(
    @Inject(HOUR) private inputHour: number,
    @Inject(MINUTE) private inputMinute: number,
  ) {
    this.selectedHour = inputHour;
    this.selectedMinute = inputMinute;
    this.selectedAmPm = inputHour < 12 ? 'AM' : 'PM';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // minute sliderをscroll
    const convinientPixel = Math.trunc(this.selectedMinute / 5) * 192;
    const remainderPixcel = (this.selectedMinute % 5) * 36;
    const Adjast = this.selectedMinute % 5 === 0 ? 0 : 4;
    this.minuteSlider.nativeElement.scrollTo(
      convinientPixel + remainderPixcel + Adjast,
      0,
    );
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
    this.selectedMinute = minute;
  }

  cancel() {
    this.pickerClose.emit({ hour: this.inputHour, minute: this.inputMinute });
  }

  success() {
    this.pickerClose.emit({
      hour: this.selectedHour,
      minute: this.selectedMinute,
    });
  }
}
