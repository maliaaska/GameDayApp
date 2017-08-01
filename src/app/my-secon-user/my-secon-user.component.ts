import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-my-secon-user',
  template: `
  <p> My Counter </p>
    <button (click)="incrementCounter()"> increment </button>
  `,
  styleUrls: ['./my-secon-user.component.css'],
  providers: [UserService]
})
export class MySeconUserComponent implements OnInit {

  constructor(private theUser: UserService) { }

  ngOnInit() {
  }

    incrementCounter() {
    this.theUser.increment();
  }
}
