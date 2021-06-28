import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: Array<User> = new Array<any>(); // fetching from api
  constructor(private userservice: UserService) { }
  ngOnInit(): void {
    // for Observable
    // this.userservice.getUsers().subscribe(users => {
    //   this.userList = users;
    // }, error => console.log('Error in fetching data')
    // )

    // for Promise
    this.userservice.getUsers().then((users) => {
      this.userList = users;
    }).catch((err) => console.log(err))
  }

  addUser() {
    this.userservice.addUser({ name: 'shreyas', email: 'shreyank532@gmail.com' }).subscribe();
  }
}
