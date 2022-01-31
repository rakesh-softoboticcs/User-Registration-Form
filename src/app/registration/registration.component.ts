import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidationService } from '../custom-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: any = FormGroup;

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private _customValidation: CustomValidationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(15),
          ],
        ],
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            this._customValidation.checkUserNameValidator.bind(this),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            this._customValidation.checkEmailValidator.bind(this),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
          ],
        ],
        confirmPassword: [''],
      },
      { validator: this._customValidation.matchPasswordValidator }
    );
  }

  onSubmit(data: any) {
    this._userService.register(data);

    this.router.navigate(['/success-page']);
  }

  onReset() {
    this.registrationForm.reset();
  }

  navigateTo() {
    this.router.navigate(['/login']);
  }
}
