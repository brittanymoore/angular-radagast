import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { RadagastService } from './../radagast.service';
import { RadagastStepComponent } from './radagast-step.component';

@Component({
  selector: 'radagast',
  template: '<ng-content></ng-content>',
  providers: [ RadagastService ]
})
export class RadagastComponent implements AfterViewInit {

    stepCount = 0;
    currentStep = 1;

    constructor(private radagastService: RadagastService) {
        radagastService.stepAdded$.subscribe(
            () => {
                this.stepCount++;
            }
        )
     }

     goToCurrentStep() {
        this.radagastService.goToStep(this.currentStep);
     }

     ngAfterViewInit() {
         this.goToCurrentStep();
     }
    
}