import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';

import * as QuestionActions from './questions.actions'; 
import { selectAllQuestions } from './questions.selectors';
import { LocalStorageService } from '@angular-monorepo/localStorage';
import { QuestionInterface } from '@angular-monorepo/questionCard';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}

  saveQuestionToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          QuestionActions.createQuestion,
          QuestionActions.editQuestion,
          QuestionActions.deleteQuestion,
          QuestionActions.checkQuestionOpenAnswer,
          QuestionActions.checkQuestionManyAnswers,
          QuestionActions.checkQuestionOneAnswer,
          QuestionActions.rollBackQuestion
        ),
        switchMap(() =>
          this.store.pipe(select(selectAllQuestions))
        ),
        tap((questions: QuestionInterface[]) => {
          this.localStorageService.pushArrayToStorage(questions, 'questions');
        })
      ),
    { dispatch: false }
  );

  loadQuestionsFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuestionActions.recreateQuestionsFromSource),
        tap(() => {
          const questions: QuestionInterface[] =
            this.localStorageService.getArrayFromStorage('questions');
          this.store.dispatch(
            QuestionActions.loadQuestions({ questions: questions })
          );
        })
      ),
    { dispatch: false }
  );
}
