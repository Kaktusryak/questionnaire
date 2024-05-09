import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreInterface } from '../app.state';

export const selectAppState =
  createFeatureSelector<AppStoreInterface>('appState');

export const selectQuestions = createSelector(
  selectAppState,
  (state: AppStoreInterface) => state.questions
);

export const selectQuestionById = (questionId: string) =>
  createSelector(selectAppState, (state: AppStoreInterface) =>
    state.questions.find((question) => question.id === questionId)
  );
