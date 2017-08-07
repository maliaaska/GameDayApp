import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
@Component({



  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'GameDay!';

  user: Object = {
    // username: '',
    // password: ''
 };
constructor(private session: SessionService,)
   { }

   ngOnInit() {
    console.log(JSON.parse(localStorage.getItem("user")))
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log(this.user)
    

  }
}
