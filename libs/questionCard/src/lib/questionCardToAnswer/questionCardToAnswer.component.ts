import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-question-card-answered',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './questionCardToAnswer.component.html',
  styleUrl: './questionCardToAnswer.component.css',
})
export class QuestionCardAnsweredComponent {
  fb = inject(FormBuilder)

  

}
