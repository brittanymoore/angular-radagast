import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import Step from './step';

@Injectable()
export class RadagastService {

    public stepMoveSource: Subject<number> = new Subject<number>();
    public stepMove$: Observable<number> = this.stepMoveSource.asObservable();
    public stepsSource: Subject<Step[]> = new Subject<Step[]>();
    public steps$: Observable<Step[]> = new Subject<Step[]>().asObservable();

    private stepCount: number = 0;
    private activeStep: number = 1;
    private steps: Step[] = [];

    public addStep(step: Step): void {
        this.steps.push(step);
        this.stepCount++;
        this.updateSteps();
    }

    public updateSteps(): void {
        this.stepsSource.next(this.steps);
    }

    public goToActiveStep(): void {
        this.goToStep(this.activeStep);
    }

    public goToStep(index: number): void {
        this.activeStep = index;
        this.setActiveStep();
        this.stepMoveSource.next(index);
        this.stepsSource.next(this.steps);
    }

    public stepForward(): void {
        if (this.activeStep < this.stepCount) {
            this.activeStep++;
            this.goToActiveStep();
        }
    }

    public stepBackward(): void {
        if (this.activeStep > 1) {
            this.activeStep--;
            this.goToActiveStep();
        }
    }

    public setActiveStep(): void {
        for (let i = 0; i < this.steps.length; i++) {
            const step = this.steps[i];
            step.isActive = (step.order === this.activeStep);
        }
    }

}
