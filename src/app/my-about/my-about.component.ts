import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})
export class MyAboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
// goToHome() {
//   this.router.navigate(["/home"]);
// }