import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Course} from '../models/course';
import { throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesURL = 'https://raredon-api.herokuapp.com/my_courses.json'

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
      return this.http.get(this.coursesURL).pipe(map((res: Course[]) => {
          return res
      }), catchError(error => throwError(error.message || error)))
  }
  
}