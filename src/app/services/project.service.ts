import { Injectable } from '@angular/core';
import { PROJECTS } from '../models/static/my-projects';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS)
  }
  
}
