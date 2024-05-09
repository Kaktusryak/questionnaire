import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from '../../models/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-one-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './one-answer-form.component.html',
  styleUrl: './one-answer-form.component.scss'
})
export class OneAnswerFormComponent {
  @Input() answers : AnswerInterface[] = []

  @Output() oneAnswerEvent = new EventEmitter<string>();

  fb = inject(FormBuilder);

  oneAnswerForm = this.fb.group({
    oneAnswer: new FormControl('', Validators.required),
  })

  ngOnInit(){
    console.log('inside question')
    console.log(this.answers)
    
  }

  handleSubmit(){
    console.log('ONE')
    console.log(this.oneAnswerForm.getRawValue())
    const answer =
      this.oneAnswerForm.getRawValue().oneAnswer !== null
        ? this.oneAnswerForm.getRawValue().oneAnswer
        : undefined;
    const finalAnswer: string | undefined =
      answer !== null ? answer : undefined;
    this.oneAnswerEvent.emit(finalAnswer);
  }
}
