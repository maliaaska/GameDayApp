import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, CanActivate } from '@angular/router';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';


// import { GlobalEventsManager } from "../services/global-events-manager.service";

@Component({
  selector: 'app-my-loggedin',
  templateUrl: './my-loggedin.component.html',
  styleUrls: ['./my-loggedin.component.css'],
  providers: [SessionService],
  // directives: [NDV_DIRECTIVES]
})
export class MyLoggedinComponent implements OnInit {

    error = null;

  public  user: Object = {
          username: String,
          name: String,
          lastName: String,
          favouriteSports: String
      };
  public showEditProfile = false

   checkUser() {
    if(!this.user) {
      this.router.navigate(['/logIn'])
      return 
    }
  }
   edit() {
     
      this.showEditProfile = true
    }

    updateUser(){
      localStorage.setItem('user', user);
      this.showEditProfile = false
      
      
    }

  constructor(private session: SessionService,
              private router: Router,
              private sessionService: SessionService, 
              // private globalEventsManager: GlobalEventsManager
              )
              { }

  //  private onLoginSuccessfully(data : any) : void {
  //   /* --> HERE: you tell the global event manger to show the nav bar */
  //   this.globalEventsManager.showNavBar(true);
  //   this.router.navigate(['Welcome']);

  // }

  ngOnInit() {
        console.log("testing",JSON.parse(localStorage.getItem("user")))
        this.user = JSON.parse(localStorage.getItem("user"))
        console.log(this.user)


  }



  logout(user) {

    this.user = {};
    localStorage.clear();
    this.router.navigate(['/logIn']);
    
  }
}
