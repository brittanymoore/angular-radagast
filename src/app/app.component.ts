import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'test-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public sampleBeforeMove(): boolean {
        console.log('checking before move...');
        return true;
    }

}