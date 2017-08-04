import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// shared services
import { HttpService } from './services/http.service';
import { UtilitiesService } from './services/utilities.service';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule
    ],
    exports: [
        HttpService,
        UtilitiesService
    ],
    providers: [
        HttpService,
        UtilitiesService
    ]
})
export class SharedModule { }
