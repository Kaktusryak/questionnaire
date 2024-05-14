import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-one-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './oneAnswerForm.component.html',
  styleUrl: './oneAnswerForm.component.scss'
})
export class OneAnswerFormComponent {
  @Input() answers : AnswerInterface[] = []

  @Output() oneAnswerEvent = new EventEmitter<string>();

  fb = inject(FormBuilder);

  oneAnswerForm = this.fb.group({
    oneAnswer: new FormControl('', Validators.required),
  })

  ngOnInit(){
    this.oneAnswerForm = this.fb.group({
      oneAnswer: new FormControl('', Validators.required),
    })
    console.log('inside question')//
    console.log(this.answers)//
  }

  handleSubmit(){
    console.log('ONE')//
    console.log(this.oneAnswerForm.getRawValue())//
    const answer =
      this.oneAnswerForm.getRawValue().oneAnswer !== null
        ? this.oneAnswerForm.getRawValue().oneAnswer
        : undefined;
    const finalAnswer: string | undefined =
      answer !== null ? answer : undefined;
    this.oneAnswerEvent.emit(finalAnswer);
  }
}
