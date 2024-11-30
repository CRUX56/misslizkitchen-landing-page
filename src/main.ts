import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppReadyService } from './app/services/app-ready.service';
import { APP_INITIALIZER } from '@angular/core';

export function appInitializerFactory(appReadyService: AppReadyService) {
  return () => {
    return new Promise<void>((resolve) => {
      // Simulate any setup logic before marking the app as ready
      setTimeout(() => {
        appReadyService.markAsReady();
        resolve();
      }, 0);
    });
  };
}

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppReadyService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
