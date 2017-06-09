import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { RadagastService } from './../../radagast.service';
import { Subscription } from 'rxjs/Subscription';
import Step from './../../step';

@Component({
    selector: 'rad-wizard-step',
    templateUrl: './wizard-step.component.html',
    styleUrls: ['./wizard-step.component.scss'],
    animations: [
        trigger(
            'enterAnimation', [
                transition('void => right', [
                    style({ transform: 'translateX(-100%)', zIndex: 2 }),
                    animate('400ms', style({ transform: 'translateX(0)', zIndex: 2 }))
                ]),
                transition('right => void', [
                    style({ opacity: 1, transform: 'translateX(-100%)', zIndex: 2 }),
                    animate('400ms', style({ transform: 'translateX(0)', zIndex: 2 }))
                ]),
                transition('left => void', [
                    style({ opacity: 1, transform: 'translateX(0)', zIndex: 2 }),
                    animate('400ms', style({ transform: 'translateX(-100%', zIndex: 2 }))
                ]),
                transition('void => left', [
                    style({ transform: 'translateX(0)', zIndex: 2 }),
                    animate('400ms', style({ transform: 'translateX(-100%)', zIndex: 2 }))
                ])
            ]
        )
    ]
})
export class WizardStepComponent implements OnInit, OnDestroy {

    @Input() stepOrder: number = -1;
    @Input() stepName: string = '';

    public direction: string = '';
    public currentStep: number;
    public transitioning: boolean = false;

    private stepVisible: boolean = false;
    private subscription: Subscription;

    constructor(
        private radagastService: RadagastService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.subscription = this.radagastService.stepMove$.subscribe(
            (index: number) => {
                this.transitioning = true;
                if (index > this.currentStep) {
                    this.direction = 'left';
                } else if (index < this.currentStep) {
                    this.direction = 'right';
                }
                this.cdRef.detectChanges();
                this.currentStep = index;
                this.cdRef.detectChanges();
            });
        const step: Step = new Step(this.stepName, this.stepOrder);
        this.radagastService.addStep(step);
    }

    public ngOnDestroy() {
        this.cdRef.detach();
        this.subscription.unsubscribe();
    }

}
