import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = []
  errorMessage: string

  gitURL = "https://github.com/liamreardon";

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    let time = timer(0, 5000)
    time.subscribe(() => this.getDocuments())
  }
  
  getDocuments() {
    this.projectService.getProjects()
        .subscribe(
          documents => this.projects = documents,
          error => this.errorMessage = <any>error
        )
  }
}
