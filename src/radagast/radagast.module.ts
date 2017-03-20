import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';

// services
import { RadagastService } from './radagast.service';

// components
import { RadagastComponent } from './components/radagast/radagast.component';
import { RadagastStepComponent } from './components/radagast-step/radagast-step.component';

// directives
import { RadagastNextDirective } from './directives/radagast-next.directive';
import { RadagastPrevDirective } from './directives/radagast-prev.directive';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        RadagastComponent,
        RadagastStepComponent,
        RadagastNextDirective,
        RadagastPrevDirective
    ],
    exports: [
        RadagastComponent,
        RadagastStepComponent,
        RadagastNextDirective,
        RadagastPrevDirective
    ]
})
export class RadagastModule { } 