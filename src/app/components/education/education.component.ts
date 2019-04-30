import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [ CourseService ]
})

export class EducationComponent implements OnInit {

  courses: Course[]
  errorMessage: string

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    let time = timer(0, 5000)
    time.subscribe(() => this.getDocuments())
  }
  
  getDocuments() {
    this.courseService.getCourses()
        .subscribe(
          documents => this.courses = documents,
          error => this.errorMessage = <any>error
        )
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}
