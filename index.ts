import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesService } from './src/app/services/utilities.service';
import { HttpService } from './src/app/services/http.service';

export * from './src/app/services/utilities.service';
export * from './src/app/services/http.service';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class SharedModule {
    static forRoot(getHttp: Function): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                { provide: 'http', useFactory: getHttp },
                HttpService,
                UtilitiesService
            ]
        };
    }
}
