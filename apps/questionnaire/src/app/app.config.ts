import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import { appRoutes } from './app.routes';
import { metaReducers, reducers } from './store';
import { QuestionEffects } from './store/questions/questions.effects';




export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(QuestionEffects),
    provideStore(reducers, { metaReducers }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimationsAsync(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
};
