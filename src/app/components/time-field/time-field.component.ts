import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.scss'],
})
export class TimeFieldComponent implements OnInit, OnChanges {
  @Input() formLabel: string;
  @Input() time: { hour: number; munite: number } | null;

  inputed: boolean;
  constructor() {}

  ngOnInit() {
    this.inputed = this.time !== undefined;
  }

  ngOnChanges() {
    this.inputed = this.time !== undefined;
  }
}
