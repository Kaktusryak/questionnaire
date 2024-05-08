import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllQuestions } from '../../store/questions/questions.selectors';
import { QuestionInterface } from 'libs/questionForm/src/lib/questionForm/models/question.model';
import { QuestionCardComponent } from '@angular-monorepo/questionCard';

@Component({
  selector: 'app-management-page',
  standalone: true,
  imports: [CommonModule,QuestionCardComponent],
  templateUrl: './management-page.component.html',
  styleUrl: './management-page.component.scss'
})
export class ManagementPageComponent {
  store=inject(Store)

  questions:QuestionInterface[] = []

  questions$?:Observable<any>
  data$?:Observable<QuestionInterface[]>

  constructor(){
    
    this.store.select('questions').subscribe(d=>{
      this.questions = d.questions
      console.log(d.questions)
    })
    // console.log(this.questions$)
    // this.questions$=this.store.select(selectAllQuestions)//selector is not working ?????
    
  }

}
