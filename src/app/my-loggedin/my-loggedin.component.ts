import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-my-loggedin',
  templateUrl: './my-loggedin.component.html',
  styleUrls: ['./my-loggedin.component.css']
})
export class MyLoggedinComponent implements OnInit {
  


   user: Object = {
    // username: '',
    // password: ''
 };
    
   checkUser() {
    if(!this.user) {
      this.router.navigate(['/logIn'])
      return 
    }
  }

    error = null;

  constructor(private session: SessionService,
              private router: Router)
   { }

  ngOnInit() {
        console.log(JSON.parse(localStorage.getItem("user")))
    this.user = JSON.parse(localStorage.getItem("user"))


  }



  logout() {

    this.user = {};
    localStorage.removeItem('token');

    this.router.navigate(['/logIn']);
    console.log('logged out');
  }

}
