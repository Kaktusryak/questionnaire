import { createAction, props } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';



export const createQuestion = createAction(
  '[Question] Create',
  props<{ question: QuestionInterface }>()
);
export const editQuestion = createAction(
  '[Question] Edit',
  props<{ question: QuestionInterface }>()
);
export const deleteQuestion = createAction(
  '[Question] Delete',
  props<{ id: string }>()
);
export const checkQuestionOneAnswer = createAction(
  '[Question] Check One',
  props<{ questionId: string; answerId: string }>()
);
export const checkQuestionOpenAnswer = createAction(
  '[Questions] Check Open',
  props<{ questionId: string; answerText: string }>()
);
export const checkQuestionManyAnswers = createAction(
  '[Question] Check Many',
  props<{
    questionId: string;
    answerIdsArray: { id: string; correct: boolean }[];
  }>()
);
export const recreateQuestion = createAction('[Question] Recreate', props<{questions:QuestionInterface[]}>())
