import { createAction, props } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';


export const createQuestion = createAction('[Question] Create', props<{question:QuestionInterface}>());
export const editQuestion = createAction('[Question] Edit', props<{question:QuestionInterface}>());
export const deleteQuestion = createAction('[Question] Delete', props<{id:string}>())
export const answerQuestion = createAction('[Question] Answer', props<{id:string}>())
