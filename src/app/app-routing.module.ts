import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './project/project.component'
import { ProjectModule } from './project/project.module';
import { LoginComponent } from './login/login.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { UserprofileComponent } from './project/userprofile/userprofile.component';
const routes: Routes = [

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component: LoginComponent},

  {
    path: 'project', component: ProjectComponent,
    children: [
      {
        path: '', loadChildren: () => ProjectModule,
      },
      {
        path: 'project/create', component: CreateprojectComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
