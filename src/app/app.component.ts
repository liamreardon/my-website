import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { fadeAnimation } from './animations';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare const window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  
  isCollapsed: boolean = true
  navColor = 'rgba(46, 49, 49, 0)'
  navTextColor = 'white'
  logo = "assets/img/LR.png"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }

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

  switchClasses() {
    const el: HTMLElement = document.getElementById('myTopnav');
    if (el.className === "topnav") {
      el.className += "responsive";
    } else {
      el.className = "topnav";
    }
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 50) {
        this.navColor = 'white'
        this.logo = "assets/img/LR-red.png"
        this.navTextColor = '#d91e18'
      } else if (number < 50) {
        this.navColor = 'rgba(46, 49, 49, 0)'
        this.logo = "assets/img/LR.png"
        this.navTextColor = 'white'
      }
    }

}
