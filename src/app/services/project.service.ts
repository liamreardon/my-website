import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Project } from '../models/project';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsURL = "http://ec2-3-135-213-73.us-east-2.compute.amazonaws.com/api/projects"

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
      return this.http.get(this.projectsURL).pipe(map((res: Project[]) => {
          return res["projects"]
      }), catchError(error => throwError(error.message || error)))
  }
}
