import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { selectQuestionById } from '../../store/questions/questions.selectors';
import { editQuestion } from '../../store/questions/questions.actions';
import { QuestionFormComponent } from '@angular-monorepo/questionForm';
import { QuestionInterface } from '@angular-monorepo/questionCard';


@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [QuestionFormComponent, RouterModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
})
export class EditPageComponent {
  store = inject(Store);
  router = inject(Router);
  route = inject(ActivatedRoute);

  question!: QuestionInterface;

  subscription!: Subscription;

  alertQuestion: QuestionInterface = {
    id: '',
    text: 'Alert',
    type: 'one',
    answered: false,
    answers: [],
    date: new Date(),
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.subscription = this.store
      .pipe(select(selectQuestionById(id)))
      .subscribe((question) => {
        this.question = question || this.alertQuestion;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeQuestion(question: QuestionInterface) {
    this.store.dispatch(editQuestion({ question: question }));
    this.router.navigateByUrl('');
  }

  
}
