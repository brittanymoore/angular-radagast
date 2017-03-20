import { Component } from '@angular/core';
import { AfterViewInit, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { RadagastService } from './../../radagast.service';

@Component({
    selector: 'radagast',
    templateUrl: './radagast.html',
    styleUrls: [ './radagast.css' ],
    providers: [ RadagastService ]
})
export class RadagastComponent implements AfterViewInit, OnInit {

    private steps:Array<Object>;
    private subscription:Subscription;

    constructor(private radagastService:RadagastService) { }

    ngOnInit():void {
        this.subscription = this.radagastService.stepAdd$.subscribe(
            (steps:Array<Object>) => {
                this.steps = steps;
            }
        )
    }

    ngAfterViewInit():void {
        this.radagastService.goToCurrentStep();
    }

}