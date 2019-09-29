import { Component, OnInit } from '@angular/core';

import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { KeycloakService } from "../../app/core/auth/keycloak.service";
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component( {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {
    private agentProfile: any = {};


    constructor( private keyCloakService: KeycloakService ) { }

    ngOnInit() {
        // this.keyCloakService.loadProfile().then(user => {
        //                 console.log(user);
        //                 this.agentProfile = user.username;
        //             });
    }

    getKeycloakService() {
        return KeycloakService;
    }


   
}
