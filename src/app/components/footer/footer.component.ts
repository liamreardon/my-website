import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  linkedURL = "https://www.linkedin.com/in/liam-reardon-0b74a9159";
  gitURL = "https://github.com/liamreardon";
  twitterURL = "https://twitter.com/lreardon22";
  email = "mailto:me@liamreardon.io";
  spotify = "https://open.spotify.com/user/12185352237?si=03vv6ZlHTUGiofZRbddlTw";

  constructor() { }

  ngOnInit() {
  }

}
