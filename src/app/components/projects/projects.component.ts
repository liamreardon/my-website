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
  showSpinner = true

  gitURL = "https://github.com/liamreardon";

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    let time = timer(0, 10000)
    time.subscribe(() => this.getDocuments())
  }
  
  getDocuments() {
    this.projectService.getProjects()
        .subscribe(
          documents => {
            const projects: Project[] = []
            for (const doc of documents) {
              const p = new Project()
              p.title = doc.title
              p.description = doc.description
              p.img = doc.img
              p.link = doc.link
              p.tools = doc.tools
              p.dateAdded = new Date(doc.dateAdded)
              projects.push(p)
            }
            this.projects = projects
            this.projects.sort((a, b) => (b.dateAdded).valueOf() - (a.dateAdded).valueOf())
          },
          error => this.errorMessage = <any>error,
          () => this.showSpinner = false
        )
  }
}
