import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { createQuestion } from '../../store/questions/questions.actions';
import { QuestionCardListComponent } from '@angular-monorepo/questionCard';
import { QuestionFormComponent } from '@angular-monorepo/questionForm';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [QuestionCardListComponent, QuestionFormComponent,],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {
  title = 'questionnaire';
  store = inject(Store)
  
  

  OnInit(){
    console.log()
  }

  onAddQuestion(question:QuestionInterface){
    console.log('Home:')
    console.log(question)
    this.store.dispatch(createQuestion({question:question}))

  }
}
