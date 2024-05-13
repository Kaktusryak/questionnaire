import { createAction, props } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';


export const createQuestion = createAction(//push to storage
  '[Question] Create',
  props<{ question: QuestionInterface }>()
);
export const editQuestion = createAction(
  '[Question] Edit',//push to storage
  props<{ question: QuestionInterface }>()
);
export const deleteQuestion = createAction(//push to storage
  '[Question] Delete',
  props<{ id: string }>()
);
export const rollBackQuestion = createAction(//push to storage
  '[Question] Roll Back',
  props<{ questionId: string }>()
);
export const checkQuestionOneAnswer = createAction(//push to storage
  '[Question] Check One',
  props<{ questionId: string; answerId: string }>()
);
export const checkQuestionOpenAnswer = createAction(//push to staorage
  '[Questions] Check Open',
  props<{ questionId: string; answerText: string }>()
);
export const checkQuestionManyAnswers = createAction(//push to storage
  '[Question] Check Many',
  props<{
    questionId: string;
    answerIdsArray: { id: string; correct: boolean }[];
  }>()
);
export const recreateQuestionsFromSource = createAction(//get from storage
  '[Question] Recreate'
);

export const loadQuestions = createAction('[Question] Load',props<{questions:QuestionInterface[]}>())
