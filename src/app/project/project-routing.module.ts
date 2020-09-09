import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjectformComponent } from './projectform/projectform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprojectformComponent } from './editprojectform/editprojectform.component';

const routes: Routes = [
  {
    path: '', children: [{
      path: 'create',
      component: CreateprojectComponent,
    },{
    path:'projectform',
    component:ProjectformComponent
  },{
    path:'userprofile',
    component: UserprofileComponent
  },{
    path: 'editprojectform/:name',
    component: EditprojectformComponent
  }],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
