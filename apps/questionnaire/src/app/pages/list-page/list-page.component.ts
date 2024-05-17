import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import {
  selectAnsweredQuestions,
  selectToAnswerQuestions,
} from '../../store/questions/questions.selectors';
import {
  checkQuestionManyAnswers,
  checkQuestionOneAnswer,
  checkQuestionOpenAnswer,
  rollBackQuestion,
} from '../../store/questions/questions.actions';
import {
  QuestionCardAnsweredComponent,
  QuestionCardToAnswerComponent,
} from '@angular-monorepo/questionCard';
import { QuestionInterface } from '@angular-monorepo/questionCard';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    QuestionCardToAnswerComponent,
    CommonModule,
    QuestionCardAnsweredComponent,
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  store = inject(Store);

  questionsToAnswer: QuestionInterface[] = [];
  questionsAnswered: QuestionInterface[] = [];

  questionsSubscription?: Subscription;

  ngOnInit() {
    this.questionsSubscription = this.store
      .pipe(select(selectToAnswerQuestions))
      .subscribe((questions) => {
        this.questionsToAnswer = questions;
      });

    this.questionsSubscription.add(
      this.store
        .pipe(select(selectAnsweredQuestions))
        .subscribe((questions) => {
          this.questionsAnswered = questions;
        })
    );
  }

  ngOnDestroy() {
    this.questionsSubscription?.unsubscribe();
  }

  handleCheckOneAnswer(questionAnswerPair: any) {
    this.store.dispatch(
      checkQuestionOneAnswer({
        questionId: questionAnswerPair.questionId,
        answerId: questionAnswerPair.answerId,
      })
    );
  }

  handleCheckOpenAnswer(questionAnswerPair: any) {
    this.store.dispatch(
      checkQuestionOpenAnswer({
        questionId: questionAnswerPair.questionId,
        answerText: questionAnswerPair.answerText,
      })
    );
  }

  handleCheckManyAnswers(questionAnswersPair: any) {
    this.store.dispatch(
      checkQuestionManyAnswers({
        questionId: questionAnswersPair.questionId,
        answerIdsArray: questionAnswersPair.answerIdsArray,
      })
    );
  }

  handleRollBack(questionId: string) {
    this.store.dispatch(rollBackQuestion({ questionId: questionId }));
  }
}
