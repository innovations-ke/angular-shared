import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from './services/http.service';
import { UtilitiesService } from './services/utilities.service';

export * from './services/http.service';
export * from './services/utilities.service';

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
        HttpService,
        UtilitiesService
      ]
    };
  }
}
