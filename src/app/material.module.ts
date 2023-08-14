import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MaterialModule { }
