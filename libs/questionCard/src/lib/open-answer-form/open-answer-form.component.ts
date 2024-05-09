import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from '../models/question.model';

@Component({
  selector: 'lib-open-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './open-answer-form.component.html',
  styleUrl: './open-answer-form.component.css',
})
export class OpenAnswerFormComponent {
  @Input() answers: AnswerInterface[] = [];

  fb = inject(FormBuilder);

  openAnswerForm = this.fb.group({
    answer: ['', Validators.required],
  });

  ngOnInit() {
    console.log('inside question');
    console.log(this.answers);
  }

  handleClickTest() {
    console.log('OPEN');
    console.log(this.openAnswerForm.getRawValue());
  }
}
