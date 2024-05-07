import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {path:'',component:NxWelcomeComponent,pathMatch:'full'},
    {path:'list', loadComponent:()=>import('@angular-monorepo/questionCard').then(m=>m.QuestionCardListComponent)}
];
