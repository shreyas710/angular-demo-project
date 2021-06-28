import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // injecting service within a service
  constructor(private http: HttpClient) { }
  // getUsers(): Observable<User[]> {
  //   // ajax call to fetch users
  //   return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
  // }

  // convert Observable to Promise
  getUsers(): Promise<User[]> {
    // ajax call to fetch users
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users').toPromise();
  }

  addUser(userObj: any): Observable<any> {
    return this.http.post('http://jsonplaceholder.typicode.com/users', userObj);
  }
}
