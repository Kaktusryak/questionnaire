import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AnswerInterface } from '../../models/question.model';

@Component({
  selector: 'lib-many-answers-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './many-answers-form.component.html',
  styleUrl: './many-answers-form.component.scss'
})
export class ManyAnswersFormComponent {
  @Input() answers : AnswerInterface[] = []
  
  @Output() manyAnswersEvent = new EventEmitter<{id:string,correct:boolean}[]>();

  fb = inject(FormBuilder);

  manyAnswers = {}

  manyAnswersForm = this.fb.group({})

  ngOnInit(){
    console.log('inside question')
    console.log(this.answers)
    this.answers.forEach(q=>{
      this.manyAnswersForm.addControl(q.id,this.fb.control(false))
    })
  }

  handleSubmit(){
    console.log('MANY')
    const array  = Object.entries(this.manyAnswersForm.getRawValue()) 
    const objectsArray : {id:string, correct:boolean}[]  = array.map(([id,correct])=>{
      return{
        id,
        correct: !!correct
      }
    })
    console.log(objectsArray)

    this.manyAnswersEvent.emit(objectsArray)
  }
}
