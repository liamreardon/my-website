import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { COURSES } from '../models/static/completed-courses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}
