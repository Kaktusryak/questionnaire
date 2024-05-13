import { createReducer, on } from '@ngrx/store';
import { appState } from '../app.state';
import {
  checkQuestionManyAnswers,
  checkQuestionOneAnswer,
  checkQuestionOpenAnswer,
  createQuestion,
  deleteQuestion,
  editQuestion,
  loadQuestions,
  recreateQuestionsFromSource,
  rollBackQuestion,
} from './questions.actions';

export const questionsReducer = createReducer(
  appState,
  on(createQuestion, (state, { question }) => {
    console.log('creating'); //
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
  on(rollBackQuestion, (state, { questionId }) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id === questionId) {
        return {
          ...q,
          answered: false,
        };
      }
      return q;
    });
    return {
      ...state,
      questions: newQuestions,
    };
  }),
  on(checkQuestionOneAnswer, (state, { questionId, answerId }) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id === questionId) {
        for (let a of q.answers) {
          if (a.id === answerId && a.correct === true) {
            console.log('checking');
            return {
              ...q,
              answered: true,
            };
          }
        }
      }
      return q;
    });
    return {
      ...state,
      questions: newQuestions,
    };
  }),
  on(checkQuestionOpenAnswer, (state, { questionId, answerText }) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id === questionId) {
        for (let a of q.answers) {
          if (a.text.toUpperCase() == answerText.toUpperCase()) {
            return {
              ...q,
              answered: true,
            };
          }
        }
      }
      return q;
    });
    return {
      ...state,
      questions: newQuestions,
    };
  }),
  on(checkQuestionManyAnswers, (state, { questionId, answerIdsArray }) => {
    const newQuestions = state.questions.map((q) => {
      if (q.id === questionId) {
        for (let i in answerIdsArray) {
          if (answerIdsArray[i].correct !== q.answers[i].correct) {
            return q;
          }
        }
      }
      return {
        ...q,
        answered: true,
      };
    });
    return {
      ...state,
      questions: newQuestions,
    };
  }),
  on(recreateQuestionsFromSource, (state) => {
    return state;
  }),
  on(loadQuestions, (state, { questions }) => {
    return {
      ...state,
      questions: questions,
    };
  })
);
