import { Directive, HostListener, Input } from '@angular/core';
import { RadagastService } from './../radagast.service';

@Directive({
    selector: '[radPrevious]'
})
export class WizardPrevDirective {

    @Input() beforeMove: () => boolean;

    constructor(
        private radagastService: RadagastService
    ) { }

    @HostListener('click') onclick(): void {
        const passThrough = (this.beforeMove) ? this.beforeMove() : true;
        if (passThrough) {
            this.radagastService.stepBackward();
        }
    }

}
