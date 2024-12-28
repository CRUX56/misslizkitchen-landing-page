import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppReadyService } from './app/services/app-ready.service';
import { APP_INITIALIZER } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    provideHttpClient(withFetch()),
    importProvidersFrom(MatSnackBarModule, BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
