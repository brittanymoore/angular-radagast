import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RadagastService {

    private stepCount: number = 0;
    private currentStep: number = 1;
    private steps: Array<Object> = [];

    private stepMoveSource: Subject<number> = new Subject<number>();
    public stepMove$: Observable<number> = this.stepMoveSource.asObservable();
    private stepAddSource: Subject<Array<Object>> = new Subject<Array<Object>>();
    public stepAdd$: Observable<Array<Object>> = this.stepAddSource.asObservable();

    addStep(obj: Object): void {
        this.steps.push(obj);
        this.stepCount++;
        this.updateSteps();
    }

    updateSteps(): void {
        this.stepAddSource.next(this.steps);
    }

    goToCurrentStep(): void {
        this.goToStep(this.currentStep);
    }

    goToStep(index: number): void {
        this.stepMoveSource.next(index);
    }

    stepForward(): void {
        if (this.currentStep < this.stepCount) {
            this.currentStep++;
            this.goToCurrentStep();
        }        
    }

    stepBackward(): void {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.goToCurrentStep();
        }        
    }

}