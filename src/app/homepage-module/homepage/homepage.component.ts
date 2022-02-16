import { User } from '../../model/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userList!: any;
  user:User=new User();
  
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
    private cookie:CookieService,
    private _userApiService:UserApiService
  ) {
     
    
    
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.getAllUsers();
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
    
    this.user.id=data.id;
    this.registrationForm.setValue({
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      gender:data.gender,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    

    // this._userService.editedUser(this.registrationForm.value);
  
  }

  updateUsersDetails(){
    this.user.firstName=this.registrationForm.value.firstName;
    this.user.lastName=this.registrationForm.value.lastName;
    this.user.userName=this.registrationForm.value.userName;
    this.user.gender=this.registrationForm.value.gender;
    this.user.email=this.registrationForm.value.email;
    this.user.password=this.registrationForm.value.password;
    this.user.confirmPassword=this.registrationForm.value.confirmPassword;

    this._userApiService.updateUsers(this.user,this.user.id)
    .subscribe((res:any)=>{
      
      alert("Updated successfully")
      this.getAllUsers()
    })
  }
  onDelete(data: any) {
    // this._userService.delete(data);
    this._userApiService.deleteUser(data.id)
    .subscribe((res:any)=>{
      alert("Employee Deleted")
      this.getAllUsers();
    })
    

  }

  // disableCurrentUser(data:any) {
  //   // let result = this._userService.getCurrentUser();
   
  //  let result = this._userApiService.getCurrentUsers(data)
  //  .subscribe((res)=>{
  //    let value = res.id===data.id
  //    if (value) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //  })
  //  let result =  this._userApiService.get();



  //   console.log(result);
    
    
    
  // }

  onSubmit(data: any) {
    // this._userService.register(data);
    // this.user = Object.assign(this.user,data);
    // this._userService.localStorageUser(this.user);

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
      alert('Employee Added Successfully')
      // let ref = document.getElementById('cancel')
      // ref?.click();
      this.getAllUsers();
 
    })
   
  }

  onReset() {
    this.registrationForm.reset();
  }

  onUserTodos()
  {
    this.router.navigate(['userTodos'])
  }

  getAllUsers()
  {
    this._userApiService.getUsers().subscribe((res:any)=>this.userList=res);
  }

 
}
