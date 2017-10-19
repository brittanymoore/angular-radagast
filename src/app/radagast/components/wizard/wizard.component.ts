import { Component, AfterViewInit, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { RadagastService } from './../../radagast.service';
import Step from './../../step';

@Component({
    selector: 'rad-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: [ './wizard.component.scss' ],
    providers: [ RadagastService ]
})
export class WizardComponent implements AfterViewInit, OnInit, OnDestroy {

    public steps: Step[];
    private stepsSubscription: Subscription;
    private stepMoveSubscription: Subscription;

    constructor(
        private radagastService: RadagastService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.stepsSubscription = this.radagastService.steps$.subscribe(
            (steps: Step[]) => {
                this.steps = steps;
                this.cdRef.detectChanges();
            }
        );
    }

    public ngAfterViewInit(): void {
        this.radagastService.goToActiveStep();
    }

    public ngOnDestroy(): void {
        this.stepsSubscription.unsubscribe();
    }

    public goToStep(step: Step) {
        this.radagastService.goToStep(step.order);
    }

}
