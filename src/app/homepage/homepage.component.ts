import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomValidationService } from '../custom-validation.service';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userList: any[] = [];
  user:any={};
  result:any;

  registrationForm: any = FormGroup;
  _customValidation: any;
  currentUser:any=this.registrationForm.value;

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

  get id(){
    return this.registrationForm.get('id');
  }

  constructor(
    private _userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private _customValidation1: CustomValidationService,
    private cookie:CookieService
  ) {
    this.userList = this._userService.getAllUsers();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
     this.result = this._userService.getCurrentUser();
    this.registrationForm = this.fb.group(
      {
        id: [
          
          
        ],
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(15),
          ],
        ],
        userName: ['', [Validators.required, Validators.minLength(3)]],
        gender:[''],
        email: ['', [Validators.required, Validators.email]],
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
      { validator: this._customValidation1.matchPasswordValidator }
    );
  }

  // checkUsername(ac:AbstractControl){
  //   if(this._userService.getCurrentUser()===ac)
  //     this._customValidation.checkEditUserNameValidator.bind(ac)
  // }

  onLogout() {
    
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

  onEdit(data: any) {
    // console.log(data);
    

    this.registrationForm.patchValue({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      gender:data.gender,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    

    this._userService.editedUser(this.registrationForm.value);


  }
  onDelete(data: any) {
    this._userService.delete(data);

  }

  disableCurrentUser(data: any) {
    let result = this._userService.getCurrentUser();
   

    console.log(result);
    
    
    if (result.id === data.id) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(data: any) {
    this._userService.register(data);
    this.user = Object.assign(this.user,data);
    this._userService.localStorageUser(this.user);
  }

  onReset() {
    this.registrationForm.reset();
  }

  onUserTodos()
  {
    this.router.navigate(['userTodos'])
  }
}
