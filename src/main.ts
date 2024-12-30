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
      setTimeout(() => {
        appReadyService.markAsReady();
        resolve();
      }, 0);
    });
  };
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(withFetch()), // Ensure HttpClient is globally available
    importProvidersFrom(MatSnackBarModule, BrowserAnimationsModule),
    ...appConfig.providers, // Include other app-specific providers
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppReadyService],
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
