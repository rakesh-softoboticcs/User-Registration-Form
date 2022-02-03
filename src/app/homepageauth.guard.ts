import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageauthGuard implements CanActivate {
  constructor(private cookie:CookieService,private router:Router){}

  canActivate():boolean{
    if(this.cookie.get('userName') || this.cookie.get('password') )
    {
      this.router.navigate(['/homepage']);
      return false;
    }
    else{
    
      return true;
    }
    
  }
  
}
