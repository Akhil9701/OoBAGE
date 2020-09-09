import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-editprojectform',
  templateUrl: './editprojectform.component.html',
  styleUrls: ['./editprojectform.component.css']
})
export class EditprojectformComponent implements OnInit {

  @Input() id: number;
  // @Output() passEntry: EventEmitter<any> = new EventEmitter();
  registerForm: FormGroup;
  submitted = false;
  checked = false;
  constructor(
     public activeModal: NgbActiveModal,
     private formBuilder: FormBuilder,
     private projectService: ProjectService,
     private router: Router,
     private sharedService: SharedService) { }

  ngOnInit() {

    // this.registerProject = new FormGroup({
    //   projectName: new FormControl(),
    //   projectDec: new FormControl()
    // })
    // alert("aaa")
    this.registerForm = this.formBuilder.group({
      project_name: [null, Validators.required],
      project_desc: [null, Validators.required],
      create_data_doc:[null, Validators.required],
      user_id:['admin'],
      group_id:['group1']
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
    this.projectService.createProject(project).then((res)=>{
      console.log(res,"888");
      // this.router.navigate(['']);
      // location.reload();
      this.sharedService.sendClickEvent();
    })
    this.activeModal.close(this.registerForm.value);
    
  }


}
