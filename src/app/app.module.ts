import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyOwnCustomMaterialModule } from './my-own-custom-material/my-own-custom-material.module';
import { ResultContainerComponent } from './container/result-container/result-container.component';
import { FormContainerComponent } from './container/form-container/form-container.component';

@NgModule({
  declarations: [AppComponent, ResultContainerComponent, FormContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
