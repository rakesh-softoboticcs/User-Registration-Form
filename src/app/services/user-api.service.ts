import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  users:any;
 
  

  private _url = "http://localhost:4000/api/users";
 
  

  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>
  {
      return this._http.post<any>('http://localhost:4000/api/users/addUser',data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }



  getUsers():Observable<any>
  {
    return this._http.get<any>(this._url+'/getAllUsers')
    .pipe(map((res:any)=>{
      
      
      return res;
      console.log(res);
    }))
    
  }
  
  getCurrentUsers(data:any)
  {
    return this._http.post<any>(this._url+'/getUser',data)
    .pipe(map((res:any)=>{
      
      console.log(res);
      return res;
      
    }))
  }


 



  updateUsers(data:any,id:number):Observable<any>
  {
    return this._http.put<any>(this._url +'/updateUser/'+ id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteUser(id:number):Observable<any>
  {
    return this._http.delete<any>(this._url +'/deleteUser/'+ id)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  // getOneUser():Observable<any>
  // {
  //   return this._http.get(this._url+'/getOneUser')
  //   .pipe(map((res:any)=>console.log(res)
  //   ))
  // }

  
}
