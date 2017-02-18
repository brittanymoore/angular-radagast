import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RadagastService {

    private stepCount:number = 0;
    private currentStep:number = 1;

    private stepMoveSource:Subject<number> = new Subject<number>();
    public stepMove$:Observable<number> = this.stepMoveSource.asObservable();

    addStep():void {
        this.stepCount++;
    }

    goToCurrentStep():void {
        this.goToStep(this.currentStep);
    }

    goToStep(index:number):void {
        this.stepMoveSource.next(index);
    }

    stepForward():void {
        if (this.currentStep < this.stepCount) {
            this.currentStep++;
            this.goToCurrentStep();
        }        
    }

    stepBackward():void {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.goToCurrentStep();
        }        
    }

}