import { Component, inject } from '@angular/core';
import { QuestionCardToAnswerComponent } from '@angular-monorepo/questionCard';
import { Store, select } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { Observable, Subscription } from 'rxjs';
import { selectAllQuestions, selectToAnswerQuestions, } from '../../store/questions/questions.selectors';
import { CommonModule } from '@angular/common';
import {
  checkQuestionManyAnswers,
  checkQuestionOneAnswer,
  checkQuestionOpenAnswer,
} from '../../store/questions/questions.actions';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [QuestionCardToAnswerComponent, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  store = inject(Store);
  constructor() {
    
  }
  questions: QuestionInterface[] = [];
  

  questionsSubscription$?: Subscription;
  data$?: Observable<QuestionInterface[]>;

  ngOnInit() {
    // this.store.select('questions').subscribe((d) => {
    //   this.questions = d.questions;
    //   console.log(d.questions);
    // });
    this.questionsSubscription$ = this.store.pipe(select(selectToAnswerQuestions)).subscribe(d=>{
      console.log('selector')
      this.questions = d
      console.log(d)
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
}
