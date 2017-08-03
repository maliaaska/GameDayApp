import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './my-log-in/my-log-in.component';
import { MySignUpComponent } from './my-sign-up/my-sign-up.component';
import { MyAboutComponent }  from './my-about/my-about.component';
import { MyUserComponent } from './my-user/my-user.component';
import { MySeconUserComponent } from './my-secon-user/my-secon-user.component';
import { SessionService } from './services/session.service';
import { MyLoggedinComponent } from './my-loggedin/my-loggedin.component';
import { EnterDetailsGuardService } from './services/enter-details-guard.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: MySignUpComponent },
  { path: 'about', component: MyAboutComponent },
  { path: 'my-user', component: MyUserComponent, },
  { path: 'my-secon-user', component: MySeconUserComponent, },
  { path: 'my-loggedin',
           component: MyLoggedinComponent,
           canActivate: [ EnterDetailsGuardService] },
           { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    LoginComponent,
    MySignUpComponent,
    MyAboutComponent,
    MyUserComponent,
    MySeconUserComponent,
    MyLoggedinComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    SessionService,
    EnterDetailsGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
