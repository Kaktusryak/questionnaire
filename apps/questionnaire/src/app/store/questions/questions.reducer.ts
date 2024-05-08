import { createReducer, on } from '@ngrx/store';
import { appState } from '../app.state';
import {
  answerQuestion,
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
  on(answerQuestion, (state, { id }) => {
    const newQuestions = state.questions.map((q) => {
        if (q.id === id) {
          return {...q, answered:true};
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
