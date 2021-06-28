import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string; // fetched by login component
  constructor(private auth: AuthService) {
    this.username = "guest";
  }
  ngOnInit(): void {
    this.auth.getUsername().subscribe(newusername => {
      this.username = newusername;
    });
  }
}
