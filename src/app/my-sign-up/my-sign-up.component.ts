import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-my-sign-up',
  templateUrl: './my-sign-up.component.html',
  styleUrls: ['./my-sign-up.component.css']
})
export class MySignUpComponent implements OnInit {

  user = {
  
 };
 username: any;
 error = null;

  constructor( private session: SessionService) { 
  

  }

  ngOnInit() {
  }
signup() {
    this.session.signup(this.user).subscribe(
      (data) => {
       console.log('signup OK')
      },
      (err) => {
     
        this.error = err;
        console.log(err);
      });
  }

}
