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
    private _customValidation1: CustomValidationService
  ) {
    this.userList = this._userService.getAllUsers();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
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
        userName: ['', [Validators.required, Validators.minLength(3),this.checkUsername.bind(this)]],
        email: ['', [Validators.required, Validators.email,this._customValidation.checkEditEmailValidator.bind(this)]],
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

  checkUsername(ac:AbstractControl){
    if(this.currentUser.userName===ac)
      this._customValidation.checkEditUserNameValidator.bind(ac)
  }

  onClick() {
    this.router.navigate(['/login']);
  }

  onEdit(data: any) {
    // console.log(data);

    this.registrationForm.patchValue({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    this._userService.editedUser(this.registrationForm.value);

    let value = this._userService.getCurrentUser();
  }
  onDelete(data: any) {
    this._userService.delete(data);
  }

  disableCurrentUser(data: any) {
    let result = this._userService.getCurrentUser();

    if (result === data.id) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit(data: any) {
    this._userService.register(data);
  }

  onReset() {
    this.registrationForm.reset();
  }
}
