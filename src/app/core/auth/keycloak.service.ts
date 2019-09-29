import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

declare var Keycloak: any;

@Injectable()
export class KeycloakService {

    static auth: any = {};
    static redirectUrl: string;

    /**
     * Initialized keycloak client
     */
    static init(): Promise<any> {
        let keycloakAuth: any = new Keycloak( 'assets/keycloak.json' );
        KeycloakService.auth.loggedIn = false;

        return new Promise(( resolve, reject ) => {
            keycloakAuth.init( { onLoad: 'check-sso' } )
                .success(() => {        
                    KeycloakService.auth.loggedIn = true;
                    KeycloakService.auth.authz = keycloakAuth;
                    KeycloakService.auth.registerUrl = KeycloakService.auth.authz.createRegisterUrl();
                    KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/" + environment.keycloakRealm + "/protocol/openid-connect/logout?redirect_uri=" + environment.baseUrl + "/index.html";
                    resolve();
                } )
                .error(() => {
                    reject();
                } );
        } );
    }

    /**
     * Checks if the logged user is a member of the specified group
   

    /**
     * Logout the current user
     */
    static logout() {
        console.log( '*** LOGOUT' );
        // KeycloakService.auth.authz.logout( { redirectUri: KeycloakService.auth.logoutUrl } );
        // KeycloakService.auth.loggedIn = false;
        // KeycloakService.auth.authz = null;
     
        KeycloakService.auth.authz.logout(environment.baseUrl);
    }

    loadProfile(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
          if (KeycloakService.auth.authz.token) {
            KeycloakService.auth.authz
              .loadUserProfile()
              .success(data => {
                  console.log(data);
                resolve(<any>data);
              })
              .error(() => {
                reject('Failed to load profile');
              });
          } else {
            reject('Not loggen in');
          }
        })
      }
    /**
     * Redirects to keycloak login page
     */
    static login() {
        KeycloakService.auth.authz.login();
    }

    /**
     * Returns the token of the currently logged user
     */
    static getToken(): Promise<string> {
        return new Promise<string>(( resolve, reject ) => {
            if ( KeycloakService.auth.authz.token ) {
                KeycloakService.auth.authz.updateToken( 5 )
                    .success(() => {
                        console.log(KeycloakService.auth.authz.token);
                        resolve( <string>KeycloakService.auth.authz.token );
                    } )
                    .error(() => {
                        reject( 'Failed to refresh token' );
                    } );
            }
        } );
    }

    /**
     * Returns true if the current user is logged in
     */
    static isLogged(): boolean {
        return KeycloakService.auth.authz != null && KeycloakService.auth.authz.authenticated;
    }
    
}