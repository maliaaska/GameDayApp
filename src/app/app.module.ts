import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './my-log-in/my-log-in.component';
import { MySignUpComponent } from './my-sign-up/my-sign-up.component';
import { SessionService } from './services/session.service';
import { MarkerService } from './services/marker.service';
import { MyLoggedinComponent } from './my-loggedin/my-loggedin.component';
import { EnterDetailsGuardService } from './services/enter-details-guard.service';
import { GlobalEventsManager}       from './services/global-events-manager.service';
import { TopNavbarComponent } from './navbar/navbar.component';
import { TopNavbarInComponent } from './navbar/navbar-in.component';
import { FileSelectDirective, FileUploader } from "ng2-file-upload";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


export const routes: Routes = [
  { path: '', redirectTo: 'logIn', pathMatch: 'full' },
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
    LoginComponent,
    MySignUpComponent,
    MyLoggedinComponent,
    TopNavbarComponent,
    TopNavbarInComponent,
    FileSelectDirective,
    
   
   
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDWNE3ZbAxLeSjbIn-X5vcTmWM1ON2wOW0'
    })
    
  ],
  providers: [
    MarkerService,
    SessionService,
    EnterDetailsGuardService,
    GlobalEventsManager
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
