import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  hour: number;
  munite: number;
  inputTarget: 'hour' | 'munite' = 'hour';
  constructor() {}

  ngOnInit() {}

  changeTarget(target: 'hour' | 'munite') {
    this.inputTarget = target;
  }

  clickNumberPad(num: number) {
    if (this.inputTarget === 'hour') {
      if (this.hour === undefined || this.hour > 2) {
        this.hour = num;
        if (num > 2) {
          this.inputTarget = 'munite';
        }
      } else {
        if (this.hour === 0) {
          if (num === 0) {
            this.inputTarget = 'munite';
          } else {
            this.hour = num;
          }
        } else {
          this.hour = this.hour * 10 + num;
          this.inputTarget = 'munite';
        }
      }
    } else if (this.inputTarget === 'munite') {
      if (this.munite === undefined || this.munite > 5) {
        this.munite = num;
      } else {
        this.munite = this.munite * 10 + num;
      }
    }
  }

  increment() {
    if (this.inputTarget === 'hour') {
      const inputedHour = this.hour === undefined ? 0 : this.hour;
      this.hour = (inputedHour + 1) % 24;
    }
    if (this.inputTarget === 'munite') {
      const inputedMunite = this.munite === undefined ? 0 : this.munite;
      this.munite = (this.munite + 1) % 60;
    }
  }

  decrement() {
    if (this.inputTarget === 'hour') {
      const inputedHour = this.hour === undefined ? 0 : this.hour;
      this.hour = (inputedHour + 23) % 24;
    }
    if (this.inputTarget === 'munite') {
      const inputedMunite = this.munite === undefined ? 0 : this.munite;
      this.munite = (this.munite + 59) % 60;
    }
  }

  clearTime() {
    this.hour = undefined;
    this.munite = undefined;
    this.inputTarget = 'hour';
  }
}
