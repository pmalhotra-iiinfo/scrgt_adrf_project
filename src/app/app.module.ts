import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { KeycloakService } from './core/auth/keycloak.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



@NgModule( {
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        KeycloakService
    ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
