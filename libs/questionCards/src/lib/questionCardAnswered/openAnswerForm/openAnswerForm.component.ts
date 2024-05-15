import { ButtonBackComponent } from '@angular-monorepo/inputs';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model'; 

@Component({
  selector: 'lib-open-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonBackComponent],
  templateUrl: './openAnswerForm.component.html',
  styleUrl: './openAnswerForm.component.scss',
})
export class OpenAnswerFormComponent {
  @Input() answers: AnswerInterface[] = [];

  @Output() rollBackEvent = new EventEmitter<string>();

  handleSubmit() {
    this.rollBackEvent.emit();
  }
}
