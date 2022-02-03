import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import {  CanActivate,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookie:CookieService,private router:Router){}

  canActivate():boolean{
    if(this.cookie.get('userName') && this.cookie.get('password') )
    {
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }

   

     
    
  }
  

