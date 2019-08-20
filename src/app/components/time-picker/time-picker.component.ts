import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const convinientPixel = Math.trunc(this.selectedMinute / 5) * 192;
    const remainderPixcel = (this.selectedMinute % 5) * 36;
    const Adjast = this.selectedMinute % 5 === 0 ? 0 : 4;
    this.minuteSlider.nativeElement.scrollTo(
      convinientPixel + remainderPixcel + Adjast,
      0,
    );
  }

  clearTime() {
    this.selectedHour = 0;
    this.selectedMinute = 0;
    this.selectedAmPm = 'AM';
    this.minuteSlider.nativeElement.scrollTo(0, 0);
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
}
