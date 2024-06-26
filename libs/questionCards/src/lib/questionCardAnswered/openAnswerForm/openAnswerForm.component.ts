import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model'; 

@Component({
  selector: 'lib-open-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './openAnswerForm.component.html',
  styleUrl: './openAnswerForm.component.scss',
})
export class OpenAnswerFormComponent {
  @Input() answers: AnswerInterface[] = [];

  @Output() rollBackEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log('inside question');//
    console.log(this.answers);//
  }

  handleSubmit() {
    console.log('OPEN');//
    this.rollBackEvent.emit();
  }
}
