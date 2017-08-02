import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-loggedin',
  templateUrl: './my-loggedin.component.html',
  styleUrls: ['./my-loggedin.component.css']
})
export class MyLoggedinComponent implements OnInit {

   user: Object = {
    username: '',
    password: ''
 }

 error = null;

  constructor(private session: SessionService,
              private router: Router)
   { }

  ngOnInit() {
  }

  logout() {
  this.router.navigate(['/logIn']);
   console.log('logged out');

 
  }

}
