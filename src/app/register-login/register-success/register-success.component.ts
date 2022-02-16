import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.route.navigate(['/login']);
  }

}
