import { Error404Component } from './component/error404/error404.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { ProjectComponent } from './component/project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : '',component:AboutComponent },
  { path : 'create',component:CreateProjectComponent },
  { path : 'project', component:ProjectComponent },
  { path : 'about',component:AboutComponent },
  { path : 'contact',component:ContactComponent },
  { path : '**',component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
