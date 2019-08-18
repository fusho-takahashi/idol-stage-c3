import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TimePickerComponent } from './time-picker.component';

@Injectable({
  providedIn: 'root',
})
export class TimePickerService {
  constructor(private overlay: Overlay) {}

  open() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const config = new OverlayConfig({
      positionStrategy,
      hasBackdrop: true,
    });

    const overlayRef = this.overlay.create(config);

    const timePickerPortal = new ComponentPortal(TimePickerComponent);

    const containerRef: ComponentRef<TimePickerComponent> = overlayRef.attach(
      timePickerPortal,
    );
  }
}
