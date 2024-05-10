import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnswerInterface } from '../models/question.model';

@Component({
  selector: 'lib-answer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './answerForm.component.html',
  styleUrl: './answerForm.component.scss',
})
export class AnswerFormComponent {
  @Input() text: string = ''
  @Input() id: string = Date.now().toString();
  @Input() correct: boolean = false;
  @Input() isChange: boolean = false;


  @Output() newItemEvent = new EventEmitter<AnswerInterface>();

  fb = inject(FormBuilder);
  buttonText = 'Add'


  answerForm = this.fb.group({
    text: [this.text, [Validators.required]],
    correct: [this.correct, Validators.required],
  });


  ngOnInit(){
    if(this.isChange){
      this.buttonText="Change"
    }
    this.answerForm = this.fb.group({
      text: [this.text, [Validators.required]],
      correct: [this.correct, Validators.required],
    });
  }



  

  onAddAnswer() {
    



    if (!this.isChange) {
      const answer: AnswerInterface = {
        id: Date.now().toString(),
        text: this.answerForm.getRawValue().text || '',
        correct: this.answerForm.getRawValue().correct || false,
      };
      console.log('adding')
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
