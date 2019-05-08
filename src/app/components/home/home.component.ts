import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Liam Reardon';

  linkedURL = "https://www.linkedin.com/in/liam-reardon-0b74a9159";
  gitURL = "https://github.com/liamreardon";
  twitterURL = "https://twitter.com/lreardon22";
  email = "mailto:me@liamreardon.io";
  spotify = "https://open.spotify.com/user/12185352237?si=03vv6ZlHTUGiofZRbddlTw";

  constructor(private _animateScrollService: NgAnimateScrollService) {}

  ngOnInit() {
  }

  scrollToProjects(duration?:number) {
    this._animateScrollService.scrollToElement('projects', duration)
  }

}
