import { Component, inject } from '@angular/core';
import { QuestionCardToAnswerComponent } from '@angular-monorepo/questionCard';
import { Store, select } from '@ngrx/store';
import { QuestionInterface } from 'libs/questionCard/src/lib/models/question.model';
import { Observable } from 'rxjs';
import { selectQuestions } from '../../store/questions/questions.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [QuestionCardToAnswerComponent, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
})
export class ListPageComponent {
  store = inject(Store);

  questions: QuestionInterface[] = [];

  questions$?: Observable<any>;
  data$?: Observable<QuestionInterface[]>;

  constructor() {
    this.store.select('questions').subscribe((d) => {
      this.questions = d.questions;
      console.log(d.questions);
    });
    
  }

  ngOnInit() {
    this.questions$ = this.store.pipe(select(selectQuestions));
  }

  handleCheckOneAnswer(newAnswerId:string){
    console.log('we are in list '+ newAnswerId)
  }
  handleCheckOpenAnswer(newAnswerText:string){
    console.log('we are in list '+ newAnswerText)
  }
  handleCheckManyAnswers(newAnswersArray:{id:string,correct:boolean}[]){
    console.log('we are in list ')
    console.log(newAnswersArray)

  }
}
