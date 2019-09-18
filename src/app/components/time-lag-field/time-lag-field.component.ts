import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TimeType } from 'src/app/domain/models';

@Component({
  selector: 'app-time-lag-field',
  templateUrl: './time-lag-field.component.html',
  styleUrls: ['./time-lag-field.component.scss'],
})
export class TimeLagFieldComponent {
  @Input() entranseTime: string | null;
  @Input() exitTime: string | null;

  @Output() timeInput = new EventEmitter<TimeType>();

  constructor() {}

  clickTimeField(field: TimeType) {
    this.timeInput.emit(field);
  }
}
