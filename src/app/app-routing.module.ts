import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'Home'} },
  {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'} }, 
  {path: 'education', component: EducationComponent, data: {animation: 'Education'} }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  
})

export class AppRoutingModule {


}
