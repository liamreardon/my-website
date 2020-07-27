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

  private coursesURL = "http://ec2-3-135-213-73.us-east-2.compute.amazonaws.com/api/courses"

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
      return this.http.get(this.coursesURL).pipe(map((res: Course[]) => {
          return res["courses"]
      }), catchError(error => throwError(error.message || error)))
  }
  
}