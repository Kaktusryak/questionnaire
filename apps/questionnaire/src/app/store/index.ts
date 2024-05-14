import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { questionsReducer } from './questions/questions.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
    questions:questionsReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
