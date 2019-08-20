import { Component, OnInit, Input } from '@angular/core';

import { TimePickerService } from '../../components/time-picker/time-picker.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  constructor(private timePicker: TimePickerService) {}

  ngOnInit() {
    this.timePicker.open();
  }
}
