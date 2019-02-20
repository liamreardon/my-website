import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  linkedURL = "https://www.linkedin.com/in/liam-reardon-0b74a9159";
  gitURL = "https://github.com/liamreardon";
  twitterURL = "https://twitter.com/lreardon22";
  email = "mailto:me@liamreardon.io"

  constructor() { }

  ngOnInit() {
  }

}
