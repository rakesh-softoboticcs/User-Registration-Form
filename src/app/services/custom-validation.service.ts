import { UserApiService } from './user-api.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  value:any;
  data:any;
  constructor(private _userService: UserService,private _userApiService:UserApiService) {}
  matchPasswordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { misMatch: true }
      : null;
  }

  checkUserNameValidator(control: AbstractControl): any {
    console.log(control.value);
   

    this._userApiService.getUsers().subscribe((res:any)=>{
      this.value=res;
      let username = this.value
      .find((user:any) => user.userName === control.value);

    return username ? { registeruserNameAlreadyUsed: true } : null;
    })

    
  }

  checkEmailValidator(control: AbstractControl): any {
  
    this._userApiService.getUsers().subscribe((res:any)=>{
      this.data=res;
      let email = this.data
      .find((mail:any) => mail.email === control.value);
    return email ? { registeremailIdAlreadyUsed: true } : null;
    })
    
  }

  checkEditUserNameValidator(control: AbstractControl): any {
    // console.log(control.value);

    let data = this._userService
      .getAllUsers()
      .find((user) => user.userName === control.value);

    return data ?  { userNameAlreadyUsed: true } : null;
  }

  checkEditEmailValidator(control: AbstractControl): any {
    let email = this._userService
      .getAllUsers()
      .find((mail) => mail.id !== control.value);
    return email ? { userNameAlreadyUsed: true } : null
  }
}


