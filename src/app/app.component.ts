import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { fadeAnimation } from './animations';
import { Router, NavigationEnd } from '@angular/router';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  

  navColor = 'rgba(46, 49, 49, 0)'
  navTextColor = 'white'

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }   

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      console.log(number)
      if (number > 105) {
        this.navColor = 'white'
        this.navTextColor = '#d91e18'
      } else if (number < 105) {
        this.navColor = 'rgba(46, 49, 49, 0)'
        this.navTextColor = 'white'
      }
    }

    changeNavTextColor() {
      
    }
  
}
