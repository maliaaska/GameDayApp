import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyLogInComponent } from './my-log-in/my-log-in.component';
import { MySignUpComponent } from './my-sign-up/my-sign-up.component';
import { MyAboutComponent }  from './my-about/my-about.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'logIn', component: MyLogInComponent },
  { path: 'signUp', component: MySignUpComponent },
  { path: 'about', component: MyAboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyLogInComponent,
    MySignUpComponent,
    MyAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
