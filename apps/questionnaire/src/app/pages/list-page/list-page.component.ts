import { Component, inject } from '@angular/core';
import { QuestionCardAnsweredComponent, QuestionCardToAnswerComponent } from '@angular-monorepo/questionCard';

import { Store, select } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import {
  selectAllQuestions,
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
import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [QuestionCardToAnswerComponent, CommonModule, QuestionCardAnsweredComponent],
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
      .subscribe((d) => {
        console.log('selector to answer');
        this.questionsToAnswer = d;
        console.log(d);
      });
    this.questionsAnsweredSubscription$ = this.store
      .pipe(select(selectAnsweredQuestions))
      .subscribe((d) => {
        console.log('selector answered');
        this.questionsAnswered = d;
        console.log(d);
      });
  }

  handleCheckOneAnswer(questionAnswerPair: any) {
    console.log('we are in list ');
    console.log(questionAnswerPair);
    this.store.dispatch(
      checkQuestionOneAnswer({
        questionId: questionAnswerPair.questionId,
        answerId: questionAnswerPair.answerId,
      })
    );
  }
  handleCheckOpenAnswer(questionAnswerPair: any) {
    console.log('we are in list ');
    console.log(questionAnswerPair);
    this.store.dispatch(
      checkQuestionOpenAnswer({
        questionId: questionAnswerPair.questionId,
        answerText: questionAnswerPair.answerText,
      })
    );
  }
  handleCheckManyAnswers(questionAnswersPair: any) {
    console.log('we are in list ');
    console.log(questionAnswersPair);
    this.store.dispatch(
      checkQuestionManyAnswers({
        questionId: questionAnswersPair.questionId,
        answerIdsArray: questionAnswersPair.answerIdsArray,
      })
    );
  }
  handleRollBack(questionId:string){
    console.log('works '+ questionId)
    this.store.dispatch(rollBackQuestion({questionId:questionId}))
  }

  ngOnDestroy() {
    this.questionsToAnswerSubscription$?.unsubscribe();
  }
}
