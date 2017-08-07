import { NgModule, ModuleWithProviders } from '@angular/core';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Import services
import { UtilitiesService } from './services/utilities.service';
import { HttpService } from './services/http.service';

// export  this services
export * from './services/utilities.service';
export * from './services/http.service';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                Http,
                HttpModule,
                JsonpModule
            ]
        };
    }
}
