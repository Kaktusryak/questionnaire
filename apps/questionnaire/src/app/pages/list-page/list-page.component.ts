import { Component, inject } from '@angular/core';
import {
  QuestionCardAnsweredComponent,
  QuestionCardToAnswerComponent,
} from '@angular-monorepo/questionCard';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  selectAnsweredQuestions,
  selectToAnswerQuestions,
} from '../../store/questions/questions.selectors';
import { CommonModule } from '@angular/common';
import {
  checkQuestionManyAnswers,
  checkQuestionOneAnswer,
  checkQuestionOpenAnswer,
  rollBackQuestion,
} from '../../store/questions/questions.actions';
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

  questionsToAnswerSubscription$?: Subscription;
  questionsAnsweredSubscription$?: Subscription;

  ngOnInit() {
    this.questionsToAnswerSubscription$ = this.store
      .pipe(select(selectToAnswerQuestions))
      .subscribe((questions) => {
        console.log('selector to answer'); //
        this.questionsToAnswer = questions;
        console.log(questions); //
      });

    this.questionsAnsweredSubscription$ = this.store
      .pipe(select(selectAnsweredQuestions))
      .subscribe((questions) => {
        console.log('selector answered'); //
        this.questionsAnswered = questions;
        console.log(questions); //
      });
  }

  ngOnDestroy() {
    this.questionsToAnswerSubscription$?.unsubscribe();
    this.questionsAnsweredSubscription$?.unsubscribe();
  }

  handleCheckOneAnswer(questionAnswerPair: any) {
    console.log('we are in list '); //
    console.log(questionAnswerPair); //
    this.store.dispatch(
      checkQuestionOneAnswer({
        questionId: questionAnswerPair.questionId,
        answerId: questionAnswerPair.answerId,
      })
    );
  }

  handleCheckOpenAnswer(questionAnswerPair: any) {
    console.log('we are in list '); //
    console.log(questionAnswerPair); //
    this.store.dispatch(
      checkQuestionOpenAnswer({
        questionId: questionAnswerPair.questionId,
        answerText: questionAnswerPair.answerText,
      })
    );
  }

  handleCheckManyAnswers(questionAnswersPair: any) {
    console.log('we are in list '); //
    console.log(questionAnswersPair); //
    this.store.dispatch(
      checkQuestionManyAnswers({
        questionId: questionAnswersPair.questionId,
        answerIdsArray: questionAnswersPair.answerIdsArray,
      })
    );
  }

  handleRollBack(questionId: string) {
    console.log('works ' + questionId); //
    this.store.dispatch(rollBackQuestion({ questionId: questionId }));
  }

  
}
