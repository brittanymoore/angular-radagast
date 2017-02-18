import { Component } from '@angular/core';
import { OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';

import { RadagastService } from './../radagast.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'radagast-step',
    template: '<div *ngIf="stepVisible"><ng-content></ng-content></div>'
})
export class RadagastStepComponent implements OnInit, OnDestroy {

    @Input() order:number;

    private stepVisible:boolean = false;
    private subscription:Subscription;

    constructor(
        private radagastService:RadagastService,
        private cdRef:ChangeDetectorRef
    ) { }

    ngOnInit():void {
        this.subscription = this.radagastService.stepMove$.subscribe(
            (index:number) => {
                if (this.order === index) {
                    this.stepVisible = true;
                } else {
                    this.stepVisible = false;
                }
                this.cdRef.detectChanges();
            });
        this.radagastService.addStep(); 
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        // unsubscribe from any subscriptions
        this.cdRef.detach();
        this.subscription.unsubscribe();
    }

}