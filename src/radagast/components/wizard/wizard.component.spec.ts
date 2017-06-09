import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// dependencies
import { RadagastService } from './../../radagast.service';

import { WizardComponent } from './wizard.component';
import Step from './../../step';

// mock dependencies
class MockRadagastService extends RadagastService {
    public stepsSource: Subject<Step[]> = new Subject<Step[]>();
    public steps$: Observable<Step[]> = new Subject<Step[]>().asObservable();
}

describe('WizardComponent', () => {

    let component: WizardComponent;
    let fixture: ComponentFixture<WizardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WizardComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WizardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});