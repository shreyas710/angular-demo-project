import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // view
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string; // model
  password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }

  ngOnInit(): void {
    // services
  }

  // controllers
  athenticate() {

  }
}
