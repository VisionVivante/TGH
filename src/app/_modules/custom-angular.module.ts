import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCheckboxModule, MatButtonModule, MatDialogModule,
  MatSlideToggleModule, MatSelectModule, MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule

  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule, MatCardModule
  ],
})
export class CustomAngularModule { }
