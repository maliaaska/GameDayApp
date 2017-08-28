import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@Component({



  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 
  title: string = 'Gameday!';
  
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

  // Marker Type

}

