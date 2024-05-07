import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { QuestionCardListComponent } from '@angular-monorepo/questionCard';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, QuestionCardListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'questionnaire';
}
