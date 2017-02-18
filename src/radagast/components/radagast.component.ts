import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { RadagastService } from './../radagast.service';

@Component({
    selector: 'radagast',
    template: '<ng-content></ng-content>',
    providers: [ RadagastService ]
})
export class RadagastComponent implements AfterViewInit {

    constructor(private radagastService:RadagastService) { }

    ngAfterViewInit():void {
        this.radagastService.goToCurrentStep();
    }

}