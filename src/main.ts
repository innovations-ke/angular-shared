import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SharedModule } from './app/shared.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  // isDevMode();
}

platformBrowserDynamic().bootstrapModule(SharedModule);
