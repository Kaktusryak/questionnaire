import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AnswerInterface, QuestionInterface } from './models/question.model';
import { AnswerFormComponent } from './answer/answerForm.component';

@Component({
  selector: 'lib-question-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AnswerFormComponent],
  templateUrl: './questionForm.component.html',
  styleUrl: './questionForm.component.css',
})
export class QuestionFormComponent {
  @Input() text: string = '';
  @Input() type: string = 'one';
  @Input() answers: AnswerInterface[] = [];
  @Input() answered: boolean = false;
  @Input() date: Date = new Date();
  @Input() id: string = Date.now().toString();
  @Input() isEdit: boolean = false;

  @Output() newItemEvent = new EventEmitter<QuestionInterface>();

  fb = inject(FormBuilder);

  questionForm = this.fb.group({
    text: [this.text, [Validators.required]],
    typeControl: new FormControl(this.type, Validators.required),
  });

  onAddAnswer(newAnswer: AnswerInterface) {
    this.answers.push(newAnswer);
    console.log(this.answers);
  }

  onChangeAnswer(newAnswer: AnswerInterface) {
    this.answers = this.answers.map((ans) => {
      if (ans.id == newAnswer.id) {
        return newAnswer;
      } else {
        return ans;
      }
    });
    console.log('qF');
    console.log(this.answers);
  }

  onAddQuestion() {
    const question: QuestionInterface = {
      id: this.id,
      text: this.questionForm.getRawValue().text || '',
      type: this.questionForm.getRawValue().typeControl || 'one',
      date: this.date,
      answers: this.answers,
      answered: this.answered,
    };
    this.newItemEvent.emit(question); //throws from question form to create page
  }
}
