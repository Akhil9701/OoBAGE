import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { ProjectRoutingModule } from './project-routing.module';
import { CreateprojectComponent } from './createproject/createproject.component';
// import { ModalModule } from 'ngb-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectformComponent } from './projectform/projectform.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserprofileComponent } from './userprofile/userprofile.component'
import { MaterialModule } from '../material.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { EditprojectformComponent } from './editprojectform/editprojectform.component'
@NgModule({
  declarations: [CreateprojectComponent, ProjectformComponent, UserprofileComponent, EditprojectformComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ModalModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    MaterialModule,
    AngularMultiSelectModule
    
  ],
  entryComponents: [ProjectformComponent]
})
export class ProjectModule { }
