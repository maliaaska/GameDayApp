import { Injectable } from '@angular/core';
import { Init } from '../my-loggedin/init-markers';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Injectable() 
export class MarkerService extends Init {
    BASE_URL: string = 'http://localhost:3000';
    public marker = {};

    constructor(private http: Http,
                private router: Router,
                private session: SessionService) {
        super();
        console.log ('MarkerService Initialized...');
        
        
    }
    handleError(e) {
    return Observable.throw(e.json().message);
  }

    getMarkers(){
      return this.http.get(`${this.BASE_URL}/marker`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  
    }

    getMarkersDB(){
         return this.http.get(`${this.BASE_URL}/marker`)
       .map((res) => res.json())
       .catch(this.handleError);
    
        
    }

    addMarker(newMarker){
        // fetch markers
       // var markers = JSON.parse(localStorage.getItem('markers'));
        // Push to array
       // markers.push(newMarker);
        // Set localStorage again
      //  localStorage.setItem('markers', JSON.stringify(markers));
     
        return this.http.post(`${this.BASE_URL}/marker`, newMarker, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
    }
    updateMarker(marker, newLat, newLng){
            
            var markers = JSON.parse(localStorage.getItem('markers'));

            for( var i = 0; i < markers.length; i++) {
                if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
                    markers[i].lat = newLat;
                    markers[i].lng = newLng;
            }
        }

        localStorage.setItem('markers', JSON.stringify(markers));
    }
    setUpSpot(spot, spotid){
        return this.http.post(`${this.BASE_URL}/spot`, spot)
        .map((res) => res.json())
        .catch(this.handleError);
    }

    removeMarker(marker,) {
        var markers = JSON.parse(localStorage.getItem('markers'));

            for( var i = 0; i < markers.length; i++) {
                if(marker.lat == markers[i].lat && marker.lng == markers[i].lng){
                    markers.splice(i, 1);
            }
        }
            localStorage.setItem('markers', JSON.stringify(markers));

    }


    private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }

             
}