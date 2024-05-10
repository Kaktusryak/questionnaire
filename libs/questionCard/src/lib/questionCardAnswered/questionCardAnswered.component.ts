import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { OneAnswerFormComponent } from './oneAnswerForm/oneAnswerForm.component';
import { ManyAnswersFormComponent } from './manyAnswersForm/manyAnswersForm.component';
import { OpenAnswerFormComponent } from './openAnswerForm/openAnswerForm.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-question-card-answered',
  standalone: true,
  imports: [
    OneAnswerFormComponent,
    ManyAnswersFormComponent,
    OpenAnswerFormComponent,
    CommonModule,
  ],
  templateUrl: './questionCardAnswered.component.html',
  styleUrl: './questionCardAnswered.component.scss',
})
export class QuestionCardAnsweredComponent {
  @Input() question: QuestionInterface = {
    id: Date.now().toString(),
    text: '',
    type: 'one',
    answers: [],
    answered: false,
    date: new Date(),
  };

  @Output() rollBackEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log('inside question');
    console.log(this.question);
  }

  handleClickTest() {
    console.log('Submit answers');
  }

  handleRollBack() {
    console.log('got it');
    this.rollBackEvent.emit(this.question.id);
  }
}
