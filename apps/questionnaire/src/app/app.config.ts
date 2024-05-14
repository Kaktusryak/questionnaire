import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { metaReducers, reducers } from './store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { QuestionEffects } from './store/questions/questions.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(QuestionEffects),
    provideStore(reducers, { metaReducers }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimationsAsync(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    
],
};
