import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Project } from '../models/project';
import {throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsURL = 'https://raredon-api.herokuapp.com/my_projects.json'

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
      return this.http.get(this.projectsURL).pipe(map((res: Project[]) => {
          return res
      }), catchError(error => throwError(error.message || error)))
  }
  
}
