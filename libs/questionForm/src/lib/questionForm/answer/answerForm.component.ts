import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from '../models/question.model';

@Component({
  selector: 'lib-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './answerForm.component.html',
  styleUrl: './answerForm.component.css',
})
export class AnswerFormComponent {
  @Input() text: string = '';
  @Input() id: string = Date.now().toString();
  @Input() correct: boolean = false;
  @Input() isChange: boolean = false;

  fb = inject(FormBuilder);

  @Output() newItemEvent = new EventEmitter<AnswerInterface>();

  buttonText = 'Add'

  constructor(){
    if(this.isChange){
      this.buttonText = 'Change'
    }
  }

  answerForm = this.fb.group({
    text: ['', [Validators.required]],
    correct: [false, Validators.required],
  });

  onAddAnswer() {
    if (!this.isChange) {
      const answer: AnswerInterface = {
        id: Date.now().toString(),
        text: this.answerForm.getRawValue().text || '',
        correct: this.answerForm.getRawValue().correct || false,
      };
      this.newItemEvent.emit(answer); //throws from child to parent
      console.log(answer);
    }else{
      const answer: AnswerInterface = {
        id: this.id,
        text: this.answerForm.getRawValue().text || '',
        correct: this.answerForm.getRawValue().correct || false,
      };
      this.newItemEvent.emit(answer); //throws from child to parent
      console.log(answer);
    }
  }
}
