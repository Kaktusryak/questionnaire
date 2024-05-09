import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionInterface } from '../models/question.model';
import { OneAnswerFormComponent } from './one-answer-form/one-answer-form.component';
import { ManyAnswersFormComponent } from './many-answers-form/many-answers-form.component';
import { OpenAnswerFormComponent } from './open-answer-form/open-answer-form.component';

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

  @Output () oneAnswerEvent = new EventEmitter<string>()
  @Output () manyAnswersEvent = new EventEmitter<{id:string,correct:boolean}[]>()
  @Output () openAnswerEvent = new EventEmitter<string>()

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
    this.oneAnswerEvent.emit(newAnswerId)
  }

  handleOpenAnswer(newAnswerText: string) {
    console.log('got it')
    console.log(newAnswerText)
    this.openAnswerEvent.emit(newAnswerText)
  }

  handleManyAnswers(newAnswersArray:{id:string,correct:boolean}[]){
    console.log('got it')
    console.log(newAnswersArray)
    this.manyAnswersEvent.emit(newAnswersArray)
  }
}
