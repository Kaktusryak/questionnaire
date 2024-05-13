import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { createQuestion, editQuestion } from '../../store/questions/questions.actions';

import { QuestionFormComponent } from '@angular-monorepo/questionForm';

import { Observable, Subscription, filter } from 'rxjs';
import { QuestionInterface } from 'libs/questionCards/src/lib/models/question.model';
import { selectQuestionById } from '../../store/questions/questions.selectors';


@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [ QuestionFormComponent, RouterModule],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
})
export class EditPageComponent {
  title = 'questionnaire';
  store = inject(Store);
  router = inject(Router);
  route = inject(ActivatedRoute);

  questions:QuestionInterface[] = []
  question!:QuestionInterface 

  alertQuestion:QuestionInterface={
    id:'',
    text:'Alert',
    type:'one',
    answered:false,
    answers:[],
    date:new Date()
  }
  
  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.store.pipe(select(selectQuestionById(id))).subscribe(q=>{
      this.question = q || this.alertQuestion
    })
  }

  onChangeQuestion(question: QuestionInterface) {
    console.log('changed')
    console.log(question)
    this.store.dispatch(editQuestion({question:question}))
    this.router.navigateByUrl('')
  }
}
