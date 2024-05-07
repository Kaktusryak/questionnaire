import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-question-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questionCard.component.html',
  styleUrl: './questionCard.component.css',
})
export class QuestionCardComponent {}
