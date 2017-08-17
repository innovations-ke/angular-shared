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
export class SharedModule {
  static forRoot(getConfig: Function): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        HttpService,
        UtilitiesService
      ]
    };
  }
}
