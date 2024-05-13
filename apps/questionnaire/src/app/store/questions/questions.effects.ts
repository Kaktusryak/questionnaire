import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as QuestionActions from './questions.actions'; // Import your action creators
import { LocalStorageService } from '../../services/local-storage.service';
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

  // Effect to save state changes to local storage when a question is created or edited
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
          // Get the current state from your store and save it to local storage
          console.log('effect works');
          let data: QuestionInterface[] = [];
          const currentState = this.store
            .pipe(select(selectAllQuestions))
            .subscribe((q) => {
              data = q;
            });
          this.localStorageService.pushArrayToStorage(data, 'questions');
        })
      ),
    { dispatch: false } // We're not dispatching any additional actions here
  );

  // Optionally, you can define an effect to load initial state from local storage
  loadQuestionsFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.recreateQuestionsFromSource),
      tap(() => {
        // Load the data from local storage and dispatch appropriate actions
        const questions: QuestionInterface[] =
          this.localStorageService.getArrayFromStorage('questions');
        // Dispatch action to update store with loaded data
        console.log('loading');
        this.store.dispatch(
          QuestionActions.loadQuestions({ questions: questions })
        );
        // For example: dispatch(QuestionActions.loadQuestions({ questions }));
      })
    )
  );
}
