import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { QuestionInterface } from '../models/question.model';

@Component({
  selector: 'lib-question-card-answered',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './questionCardToAnswer.component.html',
  styleUrl: './questionCardToAnswer.component.css',
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




  fb = inject(FormBuilder);
}
