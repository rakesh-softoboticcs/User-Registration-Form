import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userArray: any[] = [];
  public data: any;

  constructor() {}

  register(user: any) {
    if (this.userArray.length === 0) {
      user.id = 1;
      this.userArray.push(user);
    } else {
      let current = this.userArray.length;
      user.id = current + 1;
      this.userArray.push(user);
    }
    // console.log(this.userArray);
  }

  editedUser(data: any) {
    // console.log(data);

    let value = this.userArray.findIndex((user) => user.id === data.id);

    this.userArray.splice(value, 1);
    this.userArray.splice(value,0,data);
  }

  delete(data: any) {
    let result = this.userArray.findIndex((user) => user.id === data.id);
    console.log(result);

    this.userArray.splice(result, 1);

    // console.log(this.userArray);
  }

  login(username: string, password: string): boolean {
    // console.log(this.userArray);

    this.data = this.userArray.find(
      (user) => user.userName === username && user.password === password
    );
    // console.log(this.data);

    return this.data;
  }

  getCurrentUser(): any {
    // console.log(this.data);

    // console.log(this.data.id);

    return this.data.id;
  }

  getAllUsers(): any[] {
    return this.userArray;
  }
}
