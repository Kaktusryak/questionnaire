import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { createQuestion } from '../../store/questions/questions.actions';
import { QuestionFormComponent } from '@angular-monorepo/questionForm';
import { Router } from '@angular/router';
import { QuestionInterface } from '@angular-monorepo/questionCard';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [QuestionFormComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss',
})
export class CreatePageComponent {
  store = inject(Store);
  router = inject(Router);

  onAddQuestion(question: QuestionInterface) {
    this.store.dispatch(createQuestion({ question: question }));
    this.router.navigateByUrl('');
  }
}
