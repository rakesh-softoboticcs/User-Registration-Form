import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  constructor(private _userService: UserService) {}
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

    let data = this._userService
      .getAllUsers()
      .find((user) => user.userName === control.value);

    return data ? { registeruserNameAlreadyUsed: true } : null;
  }

  checkEmailValidator(control: AbstractControl): any {
    let email = this._userService
      .getAllUsers()
      .find((mail) => mail.email === control.value);
    return email ? { registeremailIdAlreadyUsed: true } : null;
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


