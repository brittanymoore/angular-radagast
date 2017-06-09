import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepComponent } from './wizard-step.component';

// dependencies
import { RadagastService } from './../../radagast.service';

// mock dependencies
class MockRadagastService extends RadagastService { }

/* tests */
describe('WizardStepComponent', () => {

    let component: WizardStepComponent;
    let fixture: ComponentFixture<WizardStepComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WizardStepComponent ],
            providers: [
                { provide: RadagastService, useClass: MockRadagastService }
            ]
        })
        .compileComponents();
    }));

    beforeEach(async(() => {
        fixture = TestBed.createComponent(WizardStepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
