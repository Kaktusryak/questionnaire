import { ButtonSubmitComponent, TextareaComponent } from '@angular-monorepo/inputs';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model'; 


@Component({
  selector: 'lib-open-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextareaComponent, ButtonSubmitComponent],
  templateUrl: './openAnswerForm.component.html',
  styleUrl: './openAnswerForm.component.scss',
})
export class OpenAnswerFormComponent {
  @Input() answers: AnswerInterface[] = [];

  @Output() openAnswerEvent = new EventEmitter<string>();

  fb = inject(FormBuilder);

  openAnswerForm = this.fb.group({
    answer: ['', Validators.required],
  });

  ngOnInit() {

    this.openAnswerForm = this.fb.group({
      answer: ['', Validators.required],
    });
  }

  handleSubmit() {
    const answer =
      this.openAnswerForm.getRawValue().answer !== null
        ? this.openAnswerForm.getRawValue().answer
        : undefined;
    const finalAnswer: string | undefined =
      answer !== null ? answer : undefined;
    this.openAnswerEvent.emit(finalAnswer);
  }

  
}
