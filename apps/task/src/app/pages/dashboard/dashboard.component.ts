import { Component, Inject, inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ReportComponent } from '../../components/report/report.component';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/counter.actions';
import { storeBoard } from '../../store/dashboard.actions';
import { LocalStorageService } from '@angular-monorepo/localStorage';
import { QuestionCardComponent } from '@angular-monorepo/questionCard';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, ReportComponent, CommonModule, QuestionCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit{
  router = inject(Router)
  authService = inject(AuthServiceService)
  http = inject(HttpClient)
  store = inject(Store)
  LSS = inject(LocalStorageService)
  reports: any;
  
  name$?:Observable<string>//ngrx study

  data$?:Observable<any>

  constructor(){
    // this.store.select('user').subscribe(data=>{
    //   console.log(data)
    // })
    this.data$ = this.store.select('dashboard')
  }
  
  // onIncrement(){
  //   this.store.dispatch(increment())
  // }
  // onDecrement(){
  //   this.store.dispatch(decrement())
  // }
  // onReset(){
  //   this.store.dispatch(reset())
  // }

  ngOnInit(): void {
    
    this.http
      .get('https://user-assessment-api.vercel.app/api/userassessments')
      .subscribe({
        next: (res) => {
          this.reports = res;
          console.log(res)
          for(let i in this.reports){
            this.store.dispatch(storeBoard(this.reports[i]))
          }
          console.log('dash')
          
        },
        error: () => {
          this.authService.removeUser()
        },
      });
  }

  handleAdminClick(): void {
    this.router.navigateByUrl('/admin');
  }
}
