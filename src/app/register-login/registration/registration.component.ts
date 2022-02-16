import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: any = FormGroup;
  user:User=new User();

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
    private _customValidation: CustomValidationService,
    private _userApiService:UserApiService
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
            Validators.minLength(3)
            // this._customValidation.checkUserNameValidator.bind(this),
          ],
        ],
        gender: [''],
        email: [
          '',
          [
            Validators.required,
            Validators.email
            // this._customValidation.checkEmailValidator.bind(this),
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
    console.log(data);

    this.user.firstName=this.registrationForm.value.firstName;
    this.user.lastName=this.registrationForm.value.lastName;
    this.user.userName=this.registrationForm.value.userName;
    this.user.gender=this.registrationForm.value.gender;
    this.user.email=this.registrationForm.value.email;
    this.user.password=this.registrationForm.value.password;
    this.user.confirmPassword=this.registrationForm.value.confirmPassword;

    this._userApiService.register(this.user)
    .subscribe((res:any)=>{
      console.log(res);
      // alert('Employee Added Successfully')
      // let ref = document.getElementById('cancel')
      // ref?.click();
 
    })

    this.router.navigate(['/success-page'])
    // this._userService.register(data);
   

    // this.router.navigate(['/success-page']);
    // this.user = Object.assign(this.user, data);
    // this._userService.localStorageUser(this.user);
  }

  onReset() {
    this.registrationForm.reset();
  }

  
}
