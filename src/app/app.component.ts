import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navColor = 'rgba(46, 49, 49, 0)'
  navTextColor = '#d91e18'

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  // getState(outlet) {
  //   return outlet.activatedRouteData.state;
  // }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log(number)
      if (number > 105) {
        this.navColor = '#f3f1ef'
        this.navTextColor = '#d91e18'
      } else if (number < 105) {
        this.navColor = 'rgba(46, 49, 49, 0)'
        this.navTextColor = '#d91e18'
      }
    }
  
}
