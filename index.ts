import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from './src/services/http.service';
import { UtilitiesService } from './src/services/utilities.service';

export * from './src/services/http.service';
export * from './src/services/utilities.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [
        HttpService,
        UtilitiesService
      ]
    };
  }
}
