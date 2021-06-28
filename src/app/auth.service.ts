import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subject = new Subject<string>(); // 1. define the subject
  constructor() { }
  setUsername(username: string) { // called by login comp
    // add it to subject - stream of values
    this.subject.next(username);
  }
  getUsername(): Observable<string> { // called by header comp
    // return type is Observable as it is stream of strings
    return this.subject.asObservable();
  }
}
