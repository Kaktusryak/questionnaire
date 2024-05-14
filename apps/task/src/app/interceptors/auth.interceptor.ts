import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

export class authInterceptor implements HttpInterceptor{

  authService = inject(AuthServiceService)

  intercept(req:HttpRequest<any>,next:HttpHandler){
    const token = localStorage.getItem('token') || ''
    const newReq = req.clone({
      headers:req.headers.set('X-Token',token)
    })
    return next.handle(newReq);
  }

  
};
