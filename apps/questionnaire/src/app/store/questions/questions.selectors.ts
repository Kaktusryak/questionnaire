import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreInterface } from '../app.state';

export const selectFeature =
  createFeatureSelector<AppStoreInterface>('questions');

export const selectAllQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) => state.questions
);

export const selectToAnswerQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) =>
    state.questions.filter((question) => question.answered === false)
);

export const selectAnsweredQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) =>
    state.questions.filter((question) => question.answered === true)
);

export const selectQuestionById = (questionId: string) =>
  createSelector(selectFeature, (state: AppStoreInterface) =>
    state.questions.find((question) => question.id === questionId)
  );
