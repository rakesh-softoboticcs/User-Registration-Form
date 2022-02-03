import { Router } from '@angular/router';
import { UserTodosService } from './../user-todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  users:any=[];

  constructor(private todoServce:UserTodosService,private router:Router) { }

  ngOnInit(): void {
    let userObservable=this.todoServce.todosUsers();
    userObservable.subscribe((users)=>{this.users=users})
  }
  onHomePage()
  {
    this.router.navigate(['/homepage']);
    console.log(this.users);
    
  }

}
