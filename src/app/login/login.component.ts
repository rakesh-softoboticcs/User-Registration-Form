import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  submitted = false;

  get userName() {
    return this.login.get('userName');
  }

  get password() {
    return this.login.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    const uName = this.login.get('userName')?.value;
    const pwd = this.login.get('password')?.value;

    let result = this._userService.login(uName, pwd);

    if (result) {
      this.router.navigate(['/homepage']);
    } else {
      this.login.setErrors({ unauthenticated: true });
    }
  }

  onNavigate() {
    this.router.navigate(['/register']);
  }
}
