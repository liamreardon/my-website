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
export class AppComponent implements OnInit {

  
  isCollapsed: boolean = true
  navColor = 'rgba(46, 49, 49, 0)'
  navTextColor = 'white'
  logo = "assets/img/LR.png"
  linkedURL = "https://www.linkedin.com/in/liam-reardon-0b74a9159";
  gitURL = "https://github.com/liamreardon";
  twitterURL = "https://twitter.com/lreardon22";
  email = "mailto:me@liamreardon.io";
  spotify = "https://open.spotify.com/user/12185352237?si=03vv6ZlHTUGiofZRbddlTw";


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (number > 50) {
      this.navColor = 'white'
      this.logo = "assets/img/LR-red.png"
      this.navTextColor = '#151515'
    } else if (number < 50) {
      this.navColor = 'rgba(46, 49, 49, 0)'
      this.logo = "assets/img/LR.png"
      this.navTextColor = 'white'
    }

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }   

}
