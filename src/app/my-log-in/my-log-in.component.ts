import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './my-log-in.component.html',
  styleUrls: ['./my-log-in.component.css']
})
export class LoginComponent implements OnInit {
  
  user: Object = {
		username: '',
		password: '',
  }
  
  error = null;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.user).subscribe(
      (data) => {
        console.log('login OK');
        // this.router.navigate(['/phones']);
      },
      (err) => {
        console.log('Invalid login');
        this.error = err;
      });
  }
}