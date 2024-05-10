import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { createQuestion, editQuestion } from '../../store/questions/questions.actions';

import { QuestionFormComponent } from '@angular-monorepo/questionForm';

import { Observable, Subscription, filter } from 'rxjs';


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
    this.store.select('questions').subscribe(d=>{
      this.questions = d.questions
      this.question = this.questions.find(q=>q.id==id)  || this.alertQuestion
      this.question = {...this.question,answers:this.question.answers}
      console.log(this.question)
    })
  }

  onChangeQuestion(question: QuestionInterface) {
    console.log('changed')
    console.log(question)
    this.store.dispatch(editQuestion({question:question}))
    this.router.navigateByUrl('')
  }
}
