import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './my-log-in/my-log-in.component';
import { MySignUpComponent } from './my-sign-up/my-sign-up.component';
import { SessionService } from './services/session.service';
import { MyLoggedinComponent } from './my-loggedin/my-loggedin.component';
import { EnterDetailsGuardService } from './services/enter-details-guard.service';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'logIn', component: LoginComponent },
  { path: 'signUp', component: MySignUpComponent },
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
