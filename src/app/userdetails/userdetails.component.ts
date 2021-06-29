import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userid: number = 0; // will be passed as route parameter
  user: any;
  constructor(private activatedRoute: ActivatedRoute, private userservice: UserService) {
    this.activatedRoute.params.subscribe(newparams => {
      this.userid = parseInt(newparams['id']);
      // make another http call to get more details
      // iterate and get more details
    })
  }
  ngOnInit() { }
}
