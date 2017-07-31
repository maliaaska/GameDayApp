import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from "app/my-home/my-home.component";
@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.css']
})


const router: Routes = [
  { path: 'home', component: MyHomeComponent }
];
export class MyAboutComponent implements OnInit {

  constructor(private router: Routes) { }

  ngOnInit() {
  }


}
goToHome() {
  this.router.navigate(["/home"]);
}