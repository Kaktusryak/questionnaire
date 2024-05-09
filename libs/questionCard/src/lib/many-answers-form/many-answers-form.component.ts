import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AnswerInterface } from '../models/question.model';

@Component({
  selector: 'lib-many-answers-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './many-answers-form.component.html',
  styleUrl: './many-answers-form.component.css'
})
export class ManyAnswersFormComponent {
  @Input() answers : AnswerInterface[] = []

  fb = inject(FormBuilder);

  manyAnswers = {}

  manyAnswersForm = this.fb.group({})

  ngOnInit(){
    console.log('inside question')
    console.log(this.answers)
    this.answers.forEach(q=>{
      this.manyAnswersForm.addControl(q.id,this.fb.control(''))
    })
  }

  handleClickTest(){
    console.log('MANY')
    console.log(this.manyAnswersForm.getRawValue())
  }
}
