import { Route } from '@angular/router';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ManagementPageComponent } from './pages/management-page/management-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';


export const appRoutes: Route[] = [
    {path:'',component:ManagementPageComponent,pathMatch:'full'},
    {path:'create',component:CreatePageComponent},
    {path:'edit/:id',component:EditPageComponent},
    {path:'manage',component:ManagementPageComponent},
    {path:'list',component:ListPageComponent}
];
