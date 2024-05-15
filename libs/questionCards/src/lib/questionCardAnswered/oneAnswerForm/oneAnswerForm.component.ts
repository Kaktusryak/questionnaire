import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from 'libs/questionCards/src/lib/models/question.model'; 
import { CommonModule } from '@angular/common';
import { ButtonBackComponent } from '@angular-monorepo/inputs';

@Component({
  selector: 'lib-one-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonBackComponent],
  templateUrl: './oneAnswerForm.component.html',
  styleUrl: './oneAnswerForm.component.scss'
})
export class OneAnswerFormComponent {
  @Input() answers : AnswerInterface[] = []

  @Output() rollBackEvent = new EventEmitter();

  fb = inject(FormBuilder);

  oneAnswerForm = this.fb.group({
    oneAnswer: new FormControl('', Validators.required),
  })

  ngOnInit(){
    this.oneAnswerForm = this.fb.group({
      oneAnswer: new FormControl({value:'', disabled:true}, Validators.required)
    })
  }

  handleSubmit(){
    this.rollBackEvent.emit();
  }
}
