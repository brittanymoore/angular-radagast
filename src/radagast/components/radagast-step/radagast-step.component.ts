import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/core';
import { OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';

import { RadagastService } from './../../radagast.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'radagast-step',
    templateUrl: './radagast-step.html',
    styleUrls: ['./radagast-step.css'],
    animations: [
        trigger(
            'enterAnimation', [
                transition('void => right', [
                    style({ opacity: 0, transform: 'translateX(-100%)', zIndex: 2 }),
                    animate('500ms', style({ opacity: 1, transform: 'translateX(0)', zIndex: 2 }))
                ]),
                transition('right => void', [
                    style({ opacity: 1, transform: 'translateX(0)', zIndex: 2 }),
                    animate('500ms', style({ opacity: 0, transform: 'translateX(100%)', zIndex: 2 }))
                ]),
                transition('left => void', [
                    style({ opacity: 1, transform: 'translateX(0)', zIndex: 2 }),
                    animate('500ms', style({ opacity: 0, transform: 'translateX(-100%', zIndex: 2 }))
                ]),
                transition('void => left', [
                    style({ opacity: 0, transform: 'translateX(100%)', zIndex: 2 }),
                    animate('500ms', style({ opacity: 1, transform: 'translateX(0)', zIndex: 2 }))
                ])
            ]
        )
    ]
})
export class RadagastStepComponent implements OnInit, OnDestroy {

    @Input() order: number = -1;
    @Input() rname: string = "";

    private stepVisible: any = false;
    private direction: string = '';
    private currentStep: number;
    private subscription: Subscription;

    constructor(
        private radagastService: RadagastService,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.subscription = this.radagastService.stepMove$.subscribe(
            (index: number) => {  
                if (index > this.currentStep) {
                    this.direction = 'left';
                } else if (index < this.currentStep) {
                    this.direction = 'right';
                }
                console.log(index + " " + this.direction);
                this.cdRef.detectChanges();
                this.currentStep = index;
                this.cdRef.detectChanges();
            });
        let stepObj = {
            stepNumber: this.order,
            stepName: this.rname
        }
        this.radagastService.addStep(stepObj); 
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        // unsubscribe from any subscriptions
        this.cdRef.detach();
        this.subscription.unsubscribe();
    }

}