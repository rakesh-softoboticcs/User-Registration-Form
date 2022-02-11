import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserTodosService } from 'src/app/services/user-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  users:any=[];

  constructor(private todoService:UserTodosService,private router:Router) { }

  ngOnInit(): void {
    let userObservable=this.todoService.todosUsers();
    userObservable.subscribe((users)=>{this.users=users})
  }
  onHomePage()
  {
    this.router.navigate(['/homepage']);
    console.log(this.users);
    
  }

}
