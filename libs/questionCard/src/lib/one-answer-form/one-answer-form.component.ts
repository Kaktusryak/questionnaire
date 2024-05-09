import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from '../models/question.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-one-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './one-answer-form.component.html',
  styleUrl: './one-answer-form.component.css'
})
export class OneAnswerFormComponent {
  @Input() answers : AnswerInterface[] = []

  fb = inject(FormBuilder);

  oneAnswerForm = this.fb.group({
    oneAnswer: new FormControl([], Validators.required),
  })

  ngOnInit(){
    console.log('inside question')
    console.log(this.answers)
    
  }

  handleClickTest(){
    console.log('ONE')
    console.log(this.oneAnswerForm.getRawValue())

  }
}
