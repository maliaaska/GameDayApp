import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-my-user',
  template: `
  <p> My Counter </p>
    <button (click)="incrementCounter()"> increment </button>
  `,
  styleUrls: ['./my-user.component.css'],
   providers: [UserService]
})
export class MyUserComponent implements OnInit {

  constructor(private theUser: UserService) { }

  ngOnInit() {
  }

  incrementCounter() {
    this.theUser.increment();
  }

}
