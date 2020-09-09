import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/shared/services/project.service';
import { Project } from 'src/app/shared/modals/createproject.modal';
import { ModalManager } from 'ngb-modal'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectformComponent } from '../projectform/projectform.component';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { EditprojectformComponent } from '../editprojectform/editprojectform.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})


export class CreateprojectComponent implements OnInit {


  displayedColumns: string[] = ['project_name', 'project_desc', 'group'];
  @ViewChild(MatPaginator) paginator: MatPaginator
  projects: any[] = [];
  dataSource = new MatTableDataSource<Project>(this.projects)
  p: number = 1;
  clickEventsubscription: Subscription;
  // lazyLoading: true
  itemList: any[] = [];
  selectedItems = [];
  settings = {};
  projectDetails:any =[];
  test:any ={};
  registerForm: FormGroup;
  submitted = false;
  proj : Project
  constructor(private projectService: ProjectService, private modalService: NgbModal,
    private sharedService: SharedService, private router: Router,private formBuilder: FormBuilder,) {
    this.proj = new Project();
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.ngOnInit();
    })
  }

  public selectedProject = this.projects[0];


  onSelect(projectName) {
    this.selectedProject = null;
    for (var i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id == projectName) {
        this.selectedProject = this.projects[i];
      }
    }
  }



  openFormModal() {
    const modalRef = this.modalService.open(ProjectformComponent);
    // modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }

  deleteProject(id) {
    debugger;
    this.projectService.deleteProject(id).then((res) => {
      console.log("delete", res);
      this.ngOnInit();
    })
  }

  editProject(project_id) {
    // this.router.navigate(['editprojectform/' + name])
    const modalRef = this.modalService.open(EditprojectformComponent);
    // modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    alert(project_id);
  }

  projectList() {
    this.projectService.getAllProjects().then((res) => {
      console.log(res.project_list, "response")
      return res.project_list;
    }).catch((err) => {
      this.projectService = err;
      console.log(err, "error");
    })
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  onSearch(evt: any) {
    console.log(evt.target.value);
  }

  updateProject(id){
    this.projectService.updateProject(id).then((res)=>{
      console.log(res,"********");
    })
  }

  get f() { return this.registerForm.controls; }

  saveUpdatedProject(){
    this.submitted = true;
    // alert(JSON.stringify(this.registerForm.value));
    // debugger;
    if (this.registerForm.invalid) {
      return;
    }
    // debugger;
    const project = this.registerForm.value;
    console.log(JSON.stringify(this.registerForm.value), "////////********");
    this.projectService.saveUpdatedProject(project).then((res)=>{
      console.log(res);
    })
    
    // this.router.navigateByUrl('project/create');
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      project_id: [null, Validators.required],
      project_name: [null, Validators.required],
      project_desc: [null, Validators.required],
      group_id: [null, Validators.required],
      // username: ['user22'],
      // group_id: ['group1']
    })

    this.projectService.getAllProjects().then((res) => {
      console.log(res.project_list, "response")
      this.projects = res.project_list;
      this.itemList = res.project_list;
      // const dataSource = new MatTableDataSource<Project>(this.projects)
      this.dataSource.paginator = this.paginator;
    }).catch((err) => {
      this.projectService = err;
      console.log(err, "error");
    })

    this.settings = {
      text: "Select Project",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class",
      // primaryKey: "alpha3Code",
      labelKey: "project_name",
      enableSearchFilter: true,
      singleSelection: false,
      // lazyLoading: true,
    };
  }

}
