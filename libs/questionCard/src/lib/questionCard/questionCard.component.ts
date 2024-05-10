import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-question-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './questionCard.component.html',
  styleUrl: './questionCard.component.scss',
})
export class QuestionCardComponent {
  @Input() text : string = '';
  @Input() date : Date = new Date()
  @Input() type : string = ''
  @Input() id : string = ''
  @Input() onEdit! : (questionId:string) => void

  router = inject(Router)

  handleEdit(){
    this.onEdit(this.id)
  }
}
