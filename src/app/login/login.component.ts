import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // view
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string; // model
  password: string;
  constructor(private auth: AuthService, private router: Router) {
    this.username = "guest";
    this.password = "";
  }
  ngOnInit(): void {
    // services
  }
  // controllers
  athenticate() {
  }
  login() {
    // check for authentication
    this.auth.setUsername(this.username);

    // navigate to /products
    this.router.navigateByUrl('/products');
  }
}
