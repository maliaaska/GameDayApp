import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { GlobalEventsManager} from "../services/global-events-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './my-log-in.component.html',
  styleUrls: ['./my-log-in.component.css'],
  providers: [ SessionService ],
  
})
export class LoginComponent implements OnInit {
  
  
  user: Object = {
		username: '',
		password: '',
  }
  username: any;
  error = null;

  constructor(
    // private session: SessionService,
    private router: Router,
    private sessionService: SessionService,
    // private globalEventsManager: GlobalEventsManager
  ) { }

  ngOnInit() {
  }

  private onLoginSuccessfully(data : any,) : void {
    /* --> HERE: you tell the global event manger to show the nav bar */
    // this.globalEventsManager.showNavBar(true);
    this.router.navigate(['my-loggedin']);

  }

  login() {
    this.sessionService.login(this.user).subscribe(
      (data) => {
        
    
      },
      (err) => {
        console.log('Invalid login');
        this.error = err;
      });
  }
}