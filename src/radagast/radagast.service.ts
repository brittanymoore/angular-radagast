import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class RadagastService {

    private stepAddedSource = new Subject();
    private stepMoveSource = new Subject<Number>();

    stepAdded$ = this.stepAddedSource.asObservable();
    stepMove$ = this.stepMoveSource.asObservable();

    addStep() {
        this.stepAddedSource.next();
    }

    goToStep(index: Number) {
        this.stepMoveSource.next(index);
    }


}