import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadQuestions} from './store/questions/questions.actions';
import { LocalStorageService } from '@angular-monorepo/localStorage'

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  store = inject(Store)
  LSS = inject(LocalStorageService)
 
  ngOnInit(){
    this.store.dispatch(loadQuestions({questions:this.LSS.getArrayFromStorage('questions')}))
  }
}
