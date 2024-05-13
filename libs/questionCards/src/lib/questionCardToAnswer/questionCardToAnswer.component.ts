import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { OneAnswerFormComponent } from './oneAnswerForm/oneAnswerForm.component';
import { ManyAnswersFormComponent } from './manyAnswersForm/manyAnswersForm.component';
import { OpenAnswerFormComponent } from './openAnswerForm/openAnswerForm.component';


import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';

@Component({
  selector: 'lib-question-card-to-answer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OneAnswerFormComponent,
    ManyAnswersFormComponent,
    OpenAnswerFormComponent,
  ],
  templateUrl: './questionCardToAnswer.component.html',
  styleUrl: './questionCardToAnswer.component.scss',
})
export class QuestionCardToAnswerComponent {
  @Input() question: QuestionInterface = {
    id: Date.now().toString(),
    text: '',
    type: 'one',
    answers: [],
    answered: false,
    date: new Date(),
  };

  @Output () oneAnswerEvent = new EventEmitter()
  @Output () manyAnswersEvent = new EventEmitter()
  @Output () openAnswerEvent = new EventEmitter()

  ngOnInit() {
    console.log('inside question');
    console.log(this.question);
  }

  handleClickTest() {
    console.log('Submit answers');
  }

  handleOneAnswer(newAnswerId: string) {
    console.log('got it')
    console.log(newAnswerId)
    const questionAnswerPair = {
      questionId:this.question.id,
      answerId:newAnswerId
    }
    this.oneAnswerEvent.emit(questionAnswerPair)
  }

  handleOpenAnswer(newAnswerText: string) {
    console.log('got it')
    console.log(newAnswerText)
    const questionAnswerPair = {
      questionId:this.question.id,
      answerText:newAnswerText
    }
    this.openAnswerEvent.emit(questionAnswerPair)
  }

  handleManyAnswers(newAnswersArray:{id:string,correct:boolean}[]){
    console.log('got it')
    console.log(newAnswersArray)
    const questionAnswersPair = {
      questionId:this.question.id,
      answerIdsArray:newAnswersArray
    }
    this.manyAnswersEvent.emit(questionAnswersPair)
  }
}
