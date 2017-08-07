import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Component, OnInit} from "@angular/core";
import { GlobalEventsManager} from "../services/global-events-manager.service";
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})



export class TopNavbarComponent implements OnInit {
    showNavBar: boolean = false;
    
    user: Object = {
    username: '',
    password: ''
 };

    constructor(public globalEventsManager: GlobalEventsManager,
                router: Router,
                sessionService: SessionService) { 
        // this.globalEventsManager.showNavBarEmitter.subscribe((mode)=>{
        //     // mode will be null the first time it is created, so you need to igonore it when null
        //     if (mode !== null) {
        //       this.showNavBar = mode;

        //     }
        // });

        // this.globalEventsManager.showNavBarEmitter.subscribe((user) => {
        //  if (user === null) {
        //      this.showNavBar = user;
        //     }    
        // })
            
        
        
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem("user"));
    }

 
}