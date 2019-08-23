import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { ResultContainerComponent } from './container/result-container/result-container.component';
import { FormContainerComponent } from './container/form-container/form-container.component';
import { TimeLagFieldComponent } from './components/time-lag-field/time-lag-field.component';
import { DrinkCourseFieldComponent } from './components/drink-course-field/drink-course-field.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultContainerComponent,
    FormContainerComponent,
    TimeLagFieldComponent,
    DrinkCourseFieldComponent,
    TimePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    MyOwnCustomMaterialModule,
  ],
  providers: [],
  entryComponents: [TimePickerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
