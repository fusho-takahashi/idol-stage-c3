import { Component, OnInit, Input } from '@angular/core';

import { TimePickerService } from '../../components/time-picker/time-picker.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  entranceTime: { hour: number; minute: number };
  constructor(private timePicker: TimePickerService) {
    this.timePicker.timePickFinish.pipe().subscribe((time) => {
      this.entranceTime = time;
    });
  }

  ngOnInit() {}
  openTimePicker() {
    this.timePicker.open();
  }
}
