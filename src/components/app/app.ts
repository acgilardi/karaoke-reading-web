import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';
import { SignIn } from '../sign-in/sign-in';
import { Station } from '../station/station';
import { StationGuide } from '../station-guide/station-guide';
import { StationRead } from '../station-read/station-read';

const styles: string = require('!raw!less!./app.less');
const template: string = require('./app.html');


@Component({
  directives: [
    RouterOutlet
  ],
  selector: 'app',
  styles: [styles],
  template
})

@RouteConfig([
  {path: '/', component: SignIn, as: 'SignIn'},
  {path: '/station', component: Station, as: 'Station'},
  {path: '/station/read', component: StationRead, as: 'StationRead'},
  {path: '/station/guide', component: StationGuide, as: 'StationGuide'}
])

export class App {
  authenticated: boolean = false;

  constructor(private auth: AuthService, routeHelper: AuthRouteHelper) {
    auth.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
