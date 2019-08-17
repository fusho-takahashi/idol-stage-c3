import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, MatIconModule, MatRadioModule],
  exports: [MatToolbarModule, MatInputModule, MatIconModule, MatRadioModule],
})
export class MyOwnCustomMaterialModule {}
