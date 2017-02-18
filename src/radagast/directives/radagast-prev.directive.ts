import { Directive, HostListener } from '@angular/core';
import { RadagastService } from './../radagast.service';

@Directive({ 
    selector: '[radagast-prev]'
})
export class RadagastPrevDirective {

    constructor(
        private radagastService:RadagastService
    ) { }

    @HostListener('click') onclick():void {
        this.radagastService.stepBackward();
    }

}