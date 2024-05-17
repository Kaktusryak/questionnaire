import { Component, NgModule, inject,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthServiceService } from './services/auth-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { UserInterface } from './interfaces/user-interface';
import { Observable } from 'rxjs';
import { logout, restore } from './store/user.actions';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authService = inject(AuthServiceService)
  http = inject(HttpClient)
  router= inject(Router)

  store = inject(Store)

  user$?:Observable<UserInterface>
  constructor(){
    this.user$ = this.store.select('user')
    // console.log(this.user$.subscribe(data=>{
    //   console.log(data)
    // }))
  }

  
  ngOnInit():void{
    
    if(this.authService.getUserData('token')!==''){
      this.store.dispatch(restore(this.authService.restoreUser()))
    }else{
      this.router.navigateByUrl('/login')
    }
    this.user$?.subscribe(data=>{
      console.log('Confirming user')
      console.log(data)
    })
  }

  handleToLogin():void{
    this.router.navigateByUrl('/login')
  }

  handleUnlog():void{
    localStorage.setItem('token','')
    this.authService.removeUser()
    this.router.navigateByUrl('/login')
    this.store.dispatch(logout())

  }

  handleToDash():void{
    this.router.navigateByUrl('/dashboard')
  }
  handleToBeauty():void{
    this.router.navigateByUrl('/beauty')
  }

}
