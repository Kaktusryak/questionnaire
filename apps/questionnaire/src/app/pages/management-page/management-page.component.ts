import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { QuestionCardComponent } from '@angular-monorepo/questionCard';
import { selectAllQuestions } from '../../store/questions/questions.selectors';
import { Router } from '@angular/router';
import { deleteQuestion } from '../../store/questions/questions.actions';
import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss',
})
export class ManagementPageComponent {
  store = inject(Store);
  router = inject(Router);

  constructor() {
    // console.log(this.questions$)
    // this.questions$=this.store.select(selectAllQuestions)//selector is not working ?????
  }

  subscription$?: Subscription;
  subscription2$?: Subscription;

  questions: QuestionInterface[] = [];

  questions$?: Observable<any>;
  data$?: Observable<QuestionInterface[]>;

  ngOnInit() {
    this.subscription$ = this.store.select('questions').subscribe((d) => {
      this.questions = d.questions;
      console.log(d.questions);
    });
    this.questions$ = this.store.pipe(select(selectAllQuestions));
  }

  navigateToEditPage(questionId: string) {
    this.router.navigateByUrl('/edit/' + questionId);
  }
  handleDelete(questionId: string) {
    this.store.dispatch(deleteQuestion({ id: questionId }));
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }
}
