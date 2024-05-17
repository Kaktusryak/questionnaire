import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { userReducer } from './user.reducer';
import { dashboardReducer } from './dashboard.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  counter:counterReducer,
  user:userReducer,
  dashboard:dashboardReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
