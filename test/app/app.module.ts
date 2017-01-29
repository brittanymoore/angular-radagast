import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RadagastModule } from './../../src/radagast/radagast.module';

@NgModule({
    imports: [
        BrowserModule,
        RadagastModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }