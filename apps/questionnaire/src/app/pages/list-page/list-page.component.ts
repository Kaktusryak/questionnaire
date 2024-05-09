import { Component } from '@angular/core';
import { QuestionCardToAnswerComponent } from '@angular-monorepo/questionCard';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [QuestionCardToAnswerComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

}
