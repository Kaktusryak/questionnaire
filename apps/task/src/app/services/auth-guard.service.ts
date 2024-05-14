import { Injectable, inject } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { concatAll } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private authService: AuthServiceService, private router:Router) { }

  canActivate():boolean{
    if(this.authService.getUserData('role')=='Admin'){
      return true
    }else{
      this.router.navigateByUrl('/dashboard')
      return false
    }
  }
}

export const AuthGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
  return inject(AuthGuardService).canActivate();
}
