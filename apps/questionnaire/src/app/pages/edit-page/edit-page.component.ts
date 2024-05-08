import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { createQuestion } from '../../store/questions/questions.actions';

import { QuestionFormComponent } from '@angular-monorepo/questionForm';
import { QuestionCardListComponent } from '@angular-monorepo/questionCard';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [QuestionCardListComponent, QuestionFormComponent,],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  title = 'questionnaire';
  store = inject(Store)
  router = inject(Router)
  
  

  OnInit(){//retrieve question from store
    console.log()
  }

  onAddQuestion(question:QuestionInterface){
    console.log('Home:')
    console.log(question)
    this.store.dispatch(createQuestion({question:question}))
    this.router.navigateByUrl('')

  }
}
