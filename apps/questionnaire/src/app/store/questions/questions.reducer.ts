import { createReducer, on } from '@ngrx/store';
import { appState } from '../app.state';
import {
  
  checkQuestionOneAnswer,
  createQuestion,
  deleteQuestion,
  editQuestion,
} from './questions.actions';

export const questionsReducer = createReducer(
  appState,
  on(createQuestion, (state, { question }) => {
    console.log('creating')
    return {
      ...state,
      questions: [...state.questions, question],
    };
  }),
  on(editQuestion, (state, { question }) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id === question.id) {
        return question;
      } else {
        return q;
      }
    });
    return {
      ...state,
      questions: newQuestions,
    };
  }),
  on(deleteQuestion, (state, { id }) => {
    const filteredQuestions = state.questions.filter((q) => q.id !== id);
    return {
      ...state,
      questions: filteredQuestions,
    };
  }),
  on(checkQuestionOneAnswer, (state, { questionId, answerId }) => {
    const newQuestions = state.questions.map((q) => {
        if (q.id === questionId) {

          if(answerId){
            return {...q, answered:true};
          }
          return q

          
        } else {
          return q;
        }
      });
    return {
      ...state,
      questions:newQuestions
    };
  })
);
