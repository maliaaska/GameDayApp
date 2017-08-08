import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, CanActivate } from '@angular/router';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';


// import { GlobalEventsManager } from "../services/global-events-manager.service";

@Component({
  selector: 'app-my-loggedin',
  templateUrl: './my-loggedin.component.html',
  styleUrls: ['./my-loggedin.component.css'],
  providers: [SessionService],
  // directives: [NDV_DIRECTIVES]
})
export class MyLoggedinComponent implements OnInit {

  error = null;


  zoom: number = 12;
  lat: number = 41.383155;
  lng: number = 2.177526;

  markers: marker[] = [
    {
      name: 'IR0Nh@ck Volleyball',
      lat: 41.393594,
      lng: 2.206728,
      draggable: true
    },
     {
      name: 'IR0Nh@ck Final Fiesta',
      lat: 41.397823,
      lng: 2.190264,
      draggable: true
    },
     {
      name: 'Skate Park',
      lat: 41.398061,
      lng: 2.210560,
      draggable: true
    }
  ]
  clickedMarker(marker: marker, index:number){
    console.log("clicked marker" +marker.name+ "at index" +index)
  }

  mapClicked($event: any) {
    console.log('Map clicked')
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
      this.markers.push(newMarker);
  }
    markerDragEnd(marker: any, $event: any) {
      console.log('dragEnd', marker, $event);
      var updMarker = {
        name: marker.name,
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
        draggable: false
      }
      var newLat = $event.coords.lat;
      var newLng = $event.coords.lng;
    }


  public  user: Object = {
          username: String,
          name: String,
          lastName: String,
          favouriteSports: String
      };
  public showEditProfile = false

   checkUser() {
    if(!this.user) {
      this.router.navigate(['/logIn'])
      return 
    }
  }
   edit() {
     
      this.showEditProfile = true
    }

    updateUser(){
      this.showEditProfile = false;
    
      var user = {
        username: this.user['username'],
        name: this.user['name'],
        lastName: this.user['lastName'],
        favouriteSports: this.user['favouriteSports']
        
      }
      console.log(user);
      console.log('useid',this.user['_id']);
      this.session.updateUser(user, this.user['_id']).subscribe(
      (data) => {
        
        console.log(data);
      },
      (err) => {
        console.log('something wnet wrong');
        this.error = err;
      });
    }

  constructor(private session: SessionService,
              private router: Router,
              private sessionService: SessionService, 
              // private globalEventsManager: GlobalEventsManager
              )
              { }

  //  private onLoginSuccessfully(data : any) : void {
  //   /* --> HERE: you tell the global event manger to show the nav bar */
  //   this.globalEventsManager.showNavBar(true);
  //   this.router.navigate(['Welcome']);

  // }

  ngOnInit() {
        console.log("testing",JSON.parse(localStorage.getItem("user")))
        this.user = JSON.parse(localStorage.getItem("user"))
        console.log(this.user)


  }



  logout(user) {

    this.user = {};
    localStorage.clear();
    this.router.navigate(['/logIn']);
    
  }
}

interface marker {
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
  }