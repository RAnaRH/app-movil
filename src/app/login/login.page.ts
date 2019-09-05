import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("Username:",this.username);
    console.log("Password:",this.password);
  }

  login() {
    if (this.username === 'mcastillo' && this.password === 'deltaurban') {
      this.router.navigate(['tabs/tabs/tab1'])
    }
  }
 

}
