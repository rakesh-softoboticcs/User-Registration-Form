import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  users:any;
 
  

  private _url = "http://localhost:3000/posts/";
 
  

  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>
  {
      return this._http.post<any>(this._url,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }



  getUsers():Observable<any>
  {
    return this._http.get<any>(this._url)
    .pipe(map((res:any)=>{
      
      
      return res;
      console.log(res);
    }))
    
  }
  
  // getCurrentUsers(data:any)
  // {
  //   return this._http.get<any>(this._url+data)
  //   .pipe(map((res:any)=>{
      
  //     console.log(res);
  //     return res;
      
  //   }))
  // }


 



  updateUsers(data:any,id:number):Observable<any>
  {
    return this._http.put<any>(this._url + id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteUser(id:number):Observable<any>
  {
    return this._http.delete<any>(this._url + id)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  
}
