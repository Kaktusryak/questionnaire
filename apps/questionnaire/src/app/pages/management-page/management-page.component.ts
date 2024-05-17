import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { selectAllQuestions } from '../../store/questions/questions.selectors';
import { deleteQuestion } from '../../store/questions/questions.actions';
import { QuestionInterface } from '@angular-monorepo/questionCard';
import { QuestionCardComponent } from '@angular-monorepo/questionCard';
import { DateToYMD } from '@angular-monorepo/pipes';
import { LocalStorageService } from '@angular-monorepo/localStorage';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent, DateToYMD],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss',
})
export class ManagementPageComponent {
  store = inject(Store);
  router = inject(Router);

  subscription?: Subscription;

  questions: QuestionInterface[] = [];

  ngOnInit() {
    this.subscription = this.store
      .pipe(select(selectAllQuestions))
      .subscribe((questions) => {
        this.questions = questions;
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  navigateToEditPage(questionId: string) {
    this.router.navigateByUrl('/edit/' + questionId);
  }

  handleDelete(questionId: string) {
    this.store.dispatch(deleteQuestion({ id: questionId }));
  }

 
}
