import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';
import { MarkerService } from '../services/marker.service';

// import { GlobalEventsManager } from "../services/global-events-manager.service";

@Component({
  selector: 'app-my-loggedin',
  templateUrl: './my-loggedin.component.html',
  styleUrls: ['./my-loggedin.component.css'],
  providers: [SessionService, MarkerService],

})
export class MyLoggedinComponent implements OnInit {

  error = null;


  zoom: number = 12;
  lat: number = 41.383155;
  lng: number = 2.177526;
  //Values 
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

  markers: marker [];
  
    constructor(private session: SessionService,
                private router: Router,
                private sessionService: SessionService, 
                private _markerService: MarkerService,
                private markerDB : MarkerService
              // private globalEventsManager: GlobalEventsManager
              ){ 
              
               }

  canActive(){
    console.log('can active passed');
  };


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
      
      this._markerService.updateMarker(updMarker, newLat, newLng);
    }


    addMarker(){
      console.log('Adding Marker');
      if(this.markerDraggable == 'yes') {
        var isDraggable = true;
      }else{
        var isDraggable = false;
      }

      var newMarker = {
        markerName: this.markerName,
        lat: parseFloat(this.markerLat),
        lng: parseFloat(this.markerLng),
        draggable:isDraggable
      }

      //save marker to database, call service
      this._markerService.addMarker(newMarker).subscribe((res) => {
         this.markers.push(newMarker);

      });

     
    }


    removeMarker(marker) {
      console.log('Marker removed') 
      for(var i = 0; i< this.markers.length; i++){
        if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
          this.markers.splice(i, 1);
        }
      } 
     this._markerService.removeMarker(marker);
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


  ngOnInit() {
        console.log("testing",JSON.parse(localStorage.getItem("user")))
        this.user = JSON.parse(localStorage.getItem("user"))
        console.log(this.user);

        // beneath you retrieve markers database and then you assign them to array of markers whats above
        this._markerService.getMarkers().subscribe((markers) => {
          console.log(markers);
          this.markers = markers;
       })
 

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