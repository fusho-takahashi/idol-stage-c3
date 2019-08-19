import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
  ],
})
export class MyOwnCustomMaterialModule {}
