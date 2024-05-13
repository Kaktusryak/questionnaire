import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as QuestionActions from './questions.actions'; // Import your action creators
import { LocalStorageService } from 'libs/localStorage/src/lib/local-storage.service';
import { Store, select } from '@ngrx/store';
import { selectAllQuestions } from './questions.selectors';
import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';

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
        tap(() => {
          console.log('effect works'); //
          let data: QuestionInterface[] = [];
          const currentState = this.store
            .pipe(select(selectAllQuestions))
            .subscribe((q) => {
              data = q;
            });
          this.localStorageService.pushArrayToStorage(data, 'questions');
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
          console.log('loading');
          this.store.dispatch(
            QuestionActions.loadQuestions({ questions: questions })
          );
        })
      ),
    { dispatch: false }
  );
}
