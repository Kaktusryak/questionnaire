import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';


import { QuestionCardListComponent } from '@angular-monorepo/questionCard';
import { QuestionFormComponent } from '@angular-monorepo/questionForm';

import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { Store } from '@ngrx/store';
import { createQuestion } from './store/questions/questions.actions';

@Component({
  standalone: true,
  imports: [RouterModule, QuestionCardListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  OnInit() {}
}
