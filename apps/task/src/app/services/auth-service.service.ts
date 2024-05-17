import { Injectable,signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }
  

  setUser(user:UserInterface):void{
    localStorage.setItem('token',user.token)
    localStorage.setItem('name',user.first_name)
    localStorage.setItem('role',user.role)
    localStorage.setItem('last_name',user.last_name)
  }
  removeUser():void{
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('role')
    localStorage.removeItem('last_name')
  }
  getUserData(data:string):string{
    return localStorage.getItem(data) || ''
  }
  restoreUser():UserInterface{
    return{
      first_name:this.getUserData('name')||'',
      last_name:this.getUserData('last_name')||'',
      role:this.getUserData('role')||'',
      token:this.getUserData('token')||''
    }
  }
  
  


  
}
