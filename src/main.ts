import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Il charge ou déclanche le module AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
