import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Liam Reardon';

  constructor(private _animateScrollService: NgAnimateScrollService) {}

  ngOnInit() {
  }

  scrollToProjects(duration?:number) {
    this._animateScrollService.scrollToElement('projects', duration)
  }

}
