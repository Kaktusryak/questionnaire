import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model';

@Component({
  selector: 'lib-many-answers-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manyAnswersForm.component.html',
  styleUrl: './manyAnswersForm.component.scss'
})
export class ManyAnswersFormComponent {
  @Input() answers : AnswerInterface[] = []
  
  @Output() rollBackEvent = new EventEmitter();

  fb = inject(FormBuilder);

  manyAnswers = {}

  manyAnswersForm = this.fb.group({})

  ngOnInit(){
    this.answers.forEach(q=>{
      this.manyAnswersForm.addControl(q.id,this.fb.control({value:false, disabled:true}))
    })
  }

  handleSubmit(){
    this.rollBackEvent.emit()
  }
}
