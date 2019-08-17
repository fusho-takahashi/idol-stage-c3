import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { ResultContainerComponent } from './container/result-container/result-container.component';
import { FormContainerComponent } from './container/form-container/form-container.component';
import { TimeFieldComponent } from './components/time-field/time-field.component';
import { TimeLagFieldComponent } from './components/time-lag-field/time-lag-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultContainerComponent,
    FormContainerComponent,
    TimeFieldComponent,
    TimeLagFieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MyOwnCustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
