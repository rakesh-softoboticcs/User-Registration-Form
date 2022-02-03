import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userArray: any[] = [];
  public data: any;

  constructor(private cookie: CookieService) {}

  register(user: any) {
    if (this.userArray.length === 0) {
      let values = JSON.parse(localStorage.getItem('Users') || '{}');
      if (values.length === 0) {
        user.id = 1;
        values.push(user);
      } else {
        let current = values.length;
        user.id = current + 1;
        values.push(user);
      }
    } else {
      if (this.userArray.length !== 0) {
        user.id = 1;
        this.userArray.push(user);
      } else {
        let current = this.userArray.length;
        user.id = current + 1;
        this.userArray.push(user);
      }
    }

    // console.log(this.userArray);
  }

  editedUser(data: any) {
    // console.log(data);

    if (this.userArray.length === 0) {
      let values = JSON.parse(localStorage.getItem('Users') || '{}');
      let index = values.findIndex((value: any) => value.id === data.id);
      values.splice(index, 1);
      values.splice(index, 0, data);
      localStorage.setItem('Users',JSON.stringify(values));
    } else {
      let value = this.userArray.findIndex((user) => user.id === data.id);
      this.userArray.splice(value, 1);
      this.userArray.splice(value, 0, data);
    }
  }

  delete(data: any) {
    if (this.userArray.length === 0) {
      let values = JSON.parse(localStorage.getItem('Users') || '{}');
      console.log(values);

      let result = values.findIndex((user: any) => user.id === data.id);
      values.splice(result, 1);
      localStorage.setItem('Users', JSON.stringify(values));
      console.log(result);
    } else {
      let result = this.userArray.findIndex((user) => user.id === data.id);
      console.log(result);

      this.userArray.splice(result, 1);

      // console.log(this.userArray);
    }
  }

  login(username: string, password: string): any {
    // console.log(this.userArray);

    if (this.userArray.length !== 0) {
      this.data = this.userArray.find(
        (user) => user.userName === username && user.password === password
      );
      // console.log(this.data);

      return this.data;
    } else {
      let values = JSON.parse(localStorage.getItem('Users') || '{}');
      console.log(values);

      this.data = values.find(
        (value: any) =>
          value.userName === username && value.password === password
      );
      console.log(this.data);

      return this.data;
    }
  }

  getCurrentUser(): any {
    if (this.userArray.length !== 0) {
      return this.data;
    } else {
      let values = JSON.parse(localStorage.getItem('Users') || '{}');
      let cookieUserName = this.cookie.get('userName');
      let cookiePassword = this.cookie.get('password');

      console.log(cookieUserName);
      console.log(cookiePassword);

      let result = values.find(
        (value: any) =>
          value.userName === cookieUserName && value.password === cookiePassword
      );
      console.log(result);
      return result;
    }
  }

  localStorageUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  getAllUsers(): any[] {
    if (this.userArray.length === 0) {
      let value = JSON.parse(localStorage.getItem('Users') || '{}');
      console.log(value);

      return value;
    } else if (this.userArray.length !== 0) {
      return this.userArray;
    } else {
      return this.userArray;
    }
  }
}
