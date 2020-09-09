import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/shared/services/project.service';
import { CreateprojectComponent } from '../createproject/createproject.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Project } from 'src/app/shared/modals/createproject.modal';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {

  @Input() id: number;
  // @Output() passEntry: EventEmitter<any> = new EventEmitter();
  registerForm: FormGroup;
  submitted = false;
  checked = false;
  project: Project
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute) { this.project = new Project }


  getByProjectName(name) {
    this.projectService.updateProject(name).then((res) => {
      this.project = res[0];
    })
  }

  ngOnInit() {

    // let name = parseInt(this.activatedRoute.snapshot.params["name"])
    this.getByProjectName(name);
    this.registerForm = this.formBuilder.group({
      project_name: [null, Validators.required],
      project_desc: [null, Validators.required],
      create_data_doc: [null, Validators.required],
      username: ['user22'],
      group_id: ['group1']
    })
    // console.log(this.project)
  }

  get f() { return this.registerForm.controls; }

  createProject() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.registerForm.value), "********");
    const project = this.registerForm.value;
    this.projectService.createProject(project).then((res) => {
      console.log(res, "888");
      // this.router.navigate(['']);
      // location.reload();
      this.sharedService.sendClickEvent();
    })
    this.activeModal.close(this.registerForm.value);

  }


}
