import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Course } from '../models/course';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesURL = 'http://localhost:8080/api/courses'

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
      return this.http.get(this.coursesURL).pipe(map((res: Course[]) => {
          return res["courses"]
      }), catchError(error => throwError(error.message || error)))
  }
  
}