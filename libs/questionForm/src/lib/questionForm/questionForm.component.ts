import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AnswerInterface,
  QuestionInterface,
} from '../../../../questionCards/src/lib/models/question.model';
import { AnswerFormComponent } from './answerForm/answerForm.component';
import { TextInputComponent } from '@angular-monorepo/inputs';


@Component({
  selector: 'lib-question-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AnswerFormComponent, TextInputComponent],
  templateUrl: './questionForm.component.html',
  styleUrl: './questionForm.component.scss',
})
export class QuestionFormComponent {
  @Input() question: QuestionInterface = {
    id: Date.now().toString(),
    text: '',
    type: 'one',
    answers: [],
    answered: false,
    date: new Date(),
  };
  @Input() answers: AnswerInterface[] = [];
  @Input() isEdit: boolean = false;

  @Output() newItemEvent = new EventEmitter<QuestionInterface>();

  editedQuestion = { ...this.question, answers: this.answers };

  fb = inject(FormBuilder);

  questionForm = this.fb.group({
    text: [this.editedQuestion.text, [Validators.required]],
    typeControl: new FormControl(this.question.type, Validators.required),
  });

  ngOnInit() {
    this.editedQuestion = { ...this.question, answers: this.answers };
    this.questionForm = this.fb.group({
      text: [this.editedQuestion.text, [Validators.required]],
      typeControl: new FormControl(this.question.type, Validators.required),
    });
  }

  getTextFormControl(): FormControl {
    return this.questionForm.get('text') as FormControl;
  }

  onAddAnswer(newAnswer: AnswerInterface) {
    this.editedQuestion = {
      ...this.editedQuestion,
      answers: [...this.editedQuestion.answers, newAnswer],
    };
  }

  onDeleteAnswer(answerId: string) {
    const newAnswers = this.editedQuestion.answers.filter(a=>a.id!==answerId)
    this.editedQuestion = {
      ...this.editedQuestion,
      answers:newAnswers
    }
  }

  onChangeAnswer(newAnswer: AnswerInterface) {
    this.editedQuestion.answers = this.editedQuestion.answers.map((ans) => {
      if (ans.id == newAnswer.id) {
        return newAnswer;
      } else {
        return ans;
      }
    });
  }

  onTextChange(newText:string){}

  onAddQuestion() {
    if (!this.questionForm.invalid) {
      const question: QuestionInterface = {
        id: this.editedQuestion.id,
        text: this.questionForm.getRawValue().text || '',
        type: this.questionForm.getRawValue().typeControl || 'one',
        date: this.editedQuestion.date,//save default date
        answers: this.editedQuestion.answers,
        answered: this.editedQuestion.answered,
      };
      this.newItemEvent.emit(question); //throws from question form to create page
    } else {
      alert('Invalid question!');
    }
  }
}
