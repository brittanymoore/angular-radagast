import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';

import { RadagastComponent } from './components/radagast.component';
import { RadagastStepComponent } from './components/radagast-step.component';

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