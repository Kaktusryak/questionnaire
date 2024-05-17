import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AnswerInterface } from '../../../../../questionCards/src/lib/models/question.model';
import {
  ButtonBackComponent,
  ButtonSubmitComponent,
  CheckboxComponent,
  TextInputComponent,
} from '@angular-monorepo/inputs';


@Component({
  selector: 'lib-answer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    CheckboxComponent,
    ButtonSubmitComponent,
    ButtonBackComponent,
  ],
  templateUrl: './answerForm.component.html',
  styleUrl: './answerForm.component.scss',
})
export class AnswerFormComponent {
  @Input() text: string = '';
  @Input() id: string = Date.now().toString();
  @Input() correct: boolean = false;
  @Input() isChange: boolean = false;

  @Output() newItemEvent = new EventEmitter<AnswerInterface>();
  @Output() deleteAnswerEvent = new EventEmitter<string>();

  fb = inject(FormBuilder);

  buttonText = 'Add';

  answerForm = this.fb.group({
    text: [this.text, [Validators.required]],
    correct: [this.correct, Validators.required],
  });

  ngOnInit() {
    if (this.isChange) {
      this.buttonText = 'Change';
    }
    this.answerForm = this.fb.group({
      text: [this.text, [Validators.required]],
      correct: [this.correct],
    });
  }

  onAddAnswer() {
    if (!this.answerForm.invalid) {
      if (!this.isChange) {
        const answer: AnswerInterface = {
          id: Date.now().toString(),
          text: this.answerForm.getRawValue().text || '',
          correct: this.answerForm.getRawValue().correct || false,
        };
        this.newItemEvent.emit(answer);
      } else {
        const answer: AnswerInterface = {
          id: this.id,
          text: this.answerForm.getRawValue().text || '',
          correct: this.answerForm.getRawValue().correct || false,
        };
        this.newItemEvent.emit(answer);
      }
    } else {
      alert('Invalid answer');
    }
  }

  onChangeAnswer() {
    if (!this.answerForm.invalid && this.isChange) {
      const answer: AnswerInterface = {
        id: this.id,
        text: this.answerForm.getRawValue().text || '',
        correct: this.answerForm.getRawValue().correct || false,
      };
      this.newItemEvent.emit(answer);
    }
  }

  onDeleteAnswer() {
    this.deleteAnswerEvent.emit(this.id);
  }
}
