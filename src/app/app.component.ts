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
  navTextColor = '#cf000f'

  @HostListener("window:scroll", [])
    onWindowScroll() {

      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 105) {
        this.navColor = '#2e3131'
        this.navTextColor = 'white'
      } else if (number < 105) {
        this.navColor = 'rgba(46, 49, 49, 0)'
        this.navTextColor = '#cf000f'
      }

    }

    navTransition() {
      this.navColor = '#2e3131'
    }
  
}
