import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { RadagastService } from './radagast.service';

// components
import { WizardComponent } from './components/wizard/wizard.component';
import { WizardStepComponent } from './components/wizard-step/wizard-step.component';

// directives
import { WizardNextDirective } from './directives/wizard-next.directive';
import { WizardPrevDirective } from './directives/wizard-prev.directive';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
        WizardComponent,
        WizardStepComponent,
        WizardNextDirective,
        WizardPrevDirective
    ],
    exports: [
        WizardComponent,
        WizardStepComponent,
        WizardNextDirective,
        WizardPrevDirective
    ]
})
export class RadagastModule { }
