import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Liam Reardon';
  linkedURL = "https://www.linkedin.com/in/liam-reardon-0b74a9159";
  gitURL = "https://github.com/liamreardon";
  twitterURL = "https://twitter.com/lreardon22";

  constructor() { }

  ngOnInit() {
  }

}
