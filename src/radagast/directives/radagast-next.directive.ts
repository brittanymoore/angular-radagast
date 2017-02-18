import { Directive, HostListener } from '@angular/core';
import { RadagastService } from './../radagast.service';

@Directive({ 
    selector: '[radagast-next]'
})
export class RadagastNextDirective {

    constructor(
        private radagastService:RadagastService
    ) { }

    @HostListener('click') onclick():void {
        this.radagastService.stepForward();
    }

}