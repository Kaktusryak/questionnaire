import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'lib-question-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './questionCard.component.html',
  styleUrl: './questionCard.component.scss',
})
export class QuestionCardComponent {
  @Input() text : string = '';
  @Input() date : Date = new Date()
  @Input() type : string = ''
}
