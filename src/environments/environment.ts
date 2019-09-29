// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    baseUrl: 'http://localhost:4200',
    production: false,
    apiUrl: 'https://18.189.184.97:8443/auth',
    keycloakRealm: 'keycloak-auth',
    keycloakClient: 'auth-client',
    keycloakBaseUrl: 'https://18.189.184.97:8443/auth'
};


// export const environment = {
//    baseUrl: 'http://localhost:4200',
//    production: false,
//    apiUrl: 'https://localhost:8443/auth/',
//    keycloakRealm: 'keycloak-auth',
//    keycloakClient: 'auth-client',
//    keycloakBaseUrl: 'https://localhost:8/auth/'
// };

