import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;

  constructor() {}

  ngOnInit() {
    console.log("Username:",this.username);
    console.log("Password:",this.password);
  }
 

}
