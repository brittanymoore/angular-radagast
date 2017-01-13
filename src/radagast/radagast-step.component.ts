import { Component } from '@angular/core';
import { OnInit, OnDestroy, Input } from '@angular/core';

import { RadagastService } from './radagast.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'radagast-step',
  template: '<div *ngIf="stepVisible"><ng-content></ng-content></div>'
})
export class RadagastStepComponent implements OnInit, OnDestroy {

    @Input() order: Number;

    stepVisible = false;
    subscription: Subscription;

    constructor(private radagastService: RadagastService) { 
        console.log(this.order);
        this.subscription = radagastService.stepMove$.subscribe(
            index => {
                if (this.order == index) {
                    this.stepVisible = true;
                } else {
                    this.stepVisible = false;
                }
            }
        )
    }

    ngOnInit() {
        this.radagastService.addStep(); 
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        // unsubscribe from any subscriptions
    }

}