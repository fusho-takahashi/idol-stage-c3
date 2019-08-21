import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-lag-field',
  templateUrl: './time-lag-field.component.html',
  styleUrls: ['./time-lag-field.component.scss'],
})
export class TimeLagFieldComponent implements OnInit {
  @Input() entranseTime?: { hour: number; minute: number };
  @Output() entranceTimeInput = new EventEmitter<void>();
  @Output() exitTimeInput = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  clickTimeField(field: 'entrance' | 'exit') {
    if (field === 'entrance') {
      this.entranceTimeInput.emit();
    } else {
      this.exitTimeInput.emit();
    }
  }
}
