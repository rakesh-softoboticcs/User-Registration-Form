import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTodosService {

  constructor(private _http:HttpClient) { }

  _url='https://jsonplaceholder.typicode.com/todos';

  todosUsers()
  {
     return this._http.get(this._url);
   
  }
}
