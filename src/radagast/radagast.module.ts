import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';

import { RadagastComponent } from './radagast.component';
import { RadagastStepComponent } from './radagast-step.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RadagastComponent,
    RadagastStepComponent
  ],
  exports: [
    RadagastComponent,
    RadagastStepComponent
  ]
})
export class RadagastModule { } 