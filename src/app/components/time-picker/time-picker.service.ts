import {
  Injectable,
  Injector,
  ComponentRef,
  EventEmitter,
} from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

import { TimePickerComponent } from './time-picker.component';
import { HOUR, MINUTE } from './time-picker.token';

@Injectable({
  providedIn: 'root',
})
export class TimePickerService {
  timePickFinish = new EventEmitter<{ hour: number; minute: number }>();
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(hour: number = 0, munite: number = 0) {
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

    const timePickerPortal = new ComponentPortal(
      TimePickerComponent,
      null,
      this.createInjector(hour, munite),
    );

    const containerRef: ComponentRef<TimePickerComponent> = overlayRef.attach(
      timePickerPortal,
    );

    const containerInstance: TimePickerComponent = containerRef.instance;

    containerInstance.pickerClose.pipe(take(1)).subscribe((event) => {
      this.timePickFinish.emit(event);
      overlayRef.detach();
    });
  }

  private createInjector(hour: number, minute: number): PortalInjector {
    const InjectorTokens = new WeakMap<any, any>([
      [HOUR, hour],
      [MINUTE, minute],
    ]);

    return new PortalInjector(this.injector, InjectorTokens);
  }
}
