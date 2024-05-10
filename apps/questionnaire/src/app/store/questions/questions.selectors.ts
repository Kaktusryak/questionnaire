import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStoreInterface } from '../app.state';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { filter, map, of, pipe } from 'rxjs';

export const selectFeature =
  createFeatureSelector<AppStoreInterface>('questions');

export const selectAllQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) => state.questions
);

export const selectToAnswerQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) =>
    state.questions.filter((q) => q.answered === false)
);

export const selectAnsweredQuestions = createSelector(
  selectFeature,
  (state: AppStoreInterface) =>
    state.questions.filter((q) => q.answered === true)
);

